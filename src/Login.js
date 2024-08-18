import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import Passfield from './Passfield';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); // Use useNavigation hook



 const handleLogin = async () => {
  try {
    console.log("Login initiated");

    const response = await axios.post('http://52.184.84.66:8080/api/v1/login', {
      email,
    });

    console.log("Response received", response.data);
    const { message, status, token } = response.data;

    if (status === 'SUCCESS' && message.includes('OTP sent successfully')) {
      Alert.alert('Success', 'OTP has been sent to your email address!');
      navigation.navigate('Otp', { token, email }); // Pass email to OTP page if needed
    } else {
      Alert.alert('Error', message || 'Login was successful but no OTP was received.');
    }
  } catch (error) {
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);

      // Customized Error Message for Email Failure
      if (error.response.status === 409 && error.response.data.message === "Failed to send Email") {
        Alert.alert('Error', 'Unable to send OTP. Please check your email address or try again later.');
      } else {
        Alert.alert('Error', error.response.data.message || 'Something went wrong. Please try again.');
      }
    } else if (error.request) {
      console.error('Request data:', error.request);
      Alert.alert('Error', 'No response received from the server. Please check your internet connection.');
    } else {
      console.error('Error message:', error.message);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    }
  }
};

const handleHome = () => {
  navigation.navigate('Home');
}

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.centeredBox}>
          <TouchableOpacity onPress={handleHome}>
            <Text>
            Hi

            </Text>
          </TouchableOpacity>
          <Text style={styles.login}>Login</Text>

          <View style={{ top: -35, left: 8 }}>
            <Passfield
              placeholder="Email"
              placeholderTextColor="#666666"
              secureTextEntry={false}
              leftImg={require('../assets/email.png')}
              keyboardType={'email-address'}
              value={email}
              onChangeText={setEmail} // Update email state
            />
          </View>

          <View style={{ top: 100 }}>
            <Btn textColor='white' bgColor='#FF4949' btnLabel="Login" Press={handleLogin} />
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.footerLink}>Signup</Text>
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
    height: 434,
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
    justifyContent: "center",
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
