import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import Background from './Background';
import Btn from './Btn';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import Passfield from './Passfield';

export default function Forgot({navigation}) {
  // useEffect(() => {
  //   async function loadFont() {
  //     await Font.loadAsync({
  //       InterBlack: require('../assets/Inter-Black.ttf'),
  //       InterBold: require('../assets/Inter-Bold.ttf'),
  //       InterExtraBold: require('../assets/Inter-ExtraBold.ttf'),
  //       InterLight: require('../assets/Inter-Light.ttf'),
  //       InterMedium: require('../assets/Inter-Medium.ttf'),
  //       InterRegular: require('../assets/Inter-Regular.ttf'),
  //       InterSemiBold: require('../assets/Inter-SemiBold.ttf'),
  //       InterThin: require('../assets/Inter-Thin.ttf'),
  //     });
  //   }
  //   loadFont();
  // }, []);

  return (
  
    <Background>
      <View style={styles.container}>
        <View style={styles.centeredBox}>
          <Text style={styles.login}>Forgot Password?</Text>
          <Text style={{top: 30, paddingHorizontal:20, paddingLeft: 35, paddingTop: 10}}>
            No worries, please enter email address associated with your account, we’ll send you an OTP.
            </Text>
          <View style={{ top: -40}}>

          <Passfield
        placeholder="Email"
        placeholderTextColor="#666666"
        secureTextEntry={false}
        leftImg={require('../assets/email.png')}    
        keyboardType={'email'}     />
      

          </View>
          <View style = {{ top: 100 }}>
          <Btn textColor='white' bgColor='#FF4949' btnLabel="Send" Press={() => navigation.navigate("Otp")} />
          </View>
          
   
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" , top: 190, left:45 }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Remember password ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: '#FF4949', fontWeight: 'bold', fontSize: 16 }}>Login here</Text>
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
    left:50
    
  },
  login: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    top:36 ,
    left:36,


  },
  input: {
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginVertical: 10,
    color: 'black',
  },
}
) 
;

