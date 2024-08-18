import { StyleSheet, Text, View, Alert, Platform } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Background from './Background';
import Btn from './Btn';
import Passfield from './Passfield';
import { TouchableOpacity } from 'react-native';
import * as Location from "expo-location"
import * as Notifications from 'expo-notifications';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }



  const handleSignup = async () => {
   console.log(location?.coords?.latitude)
   console.log(location?.coords?.longitude,'longitude')
    try {
      const response = await axios.post('http://52.184.84.66:8080/api/v1/signup', {
        email,
        phoneNumber,
        deviceType: Platform.OS.toUpperCase(),
        deviceToken: 'abc123xyz456token',
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
      });
      Alert.alert('Success', 'You have successfully signed up!');
      navigation.navigate('Otp', { email, phoneNumber });
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response) {
      console.error('Response data:', error.response.data);
      Alert.alert('Error', error.response.data.message || 'Something went wrong.');
    } else if (error.request) {
      console.error('Request data:', error.request);
      Alert.alert('Error', 'No response received from the server.');
    } else {
      console.error('Error message:', error.message);
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };



  // Firebase Work 
  async function registerForPushNotificationsAsync() {
    let token;

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    return token;
}

useEffect(() => {
  registerForPushNotificationsAsync();
  console.log("EUn")
}, [])
  //END
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.centeredBox}>
        <Text style={styles.paragraph}>{text}</Text>
          <Text style={styles.login}>Sign Up</Text>
          <Passfield
            placeholder="Email"
            placeholderTextColor="#666666"
            secureTextEntry={false}
            leftImg={require('../assets/email.png')}
            keyboardType={'email-address'}
            value={email}
            onChangeText={setEmail}
          />
          <Passfield
            placeholder="Mobile Number"
            placeholderTextColor="#666666"
            secureTextEntry={false}
            leftImg={require('../assets/flag.png')}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Btn textColor='white' bgColor='#FF4949' btnLabel="Register" Press={handleSignup} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.footerLink}>Login here</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredBox: {
    backgroundColor: 'white',
    width: 316,
    height: 340, // Adjusted height after removing fields
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    top: 110,
    left: 50,
  },
  login: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    top: 36,
    left: 36,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 190,
    left: 45,
  },
  footerText: {
    fontSize: 14,
    color: 'black',
  },
  footerLink: {
    color: '#FF4949',
    fontSize: 14,
  },
});
