import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import Background from './Background';
import Btn from './Btn';
import Passfield from './Passfield';

export default function New({ navigation }) {

  return (

    <Background>
      <View style={styles.container}>
        <View style={styles.centeredBox}>
          <Text style={styles.login}>New Password</Text>
          <Text style={{ top: 30, paddingHorizontal: 20, paddingLeft: 35, paddingTop: 10 }}>
            Your identity has been verified! Set your new password
          </Text>
          <View style={{ top: -40 }}>

            <Passfield
              placeholder="Password"
              placeholderTextColor="#666666"
              isPassword={true}
              leftImg={require('../assets/password.png')}
            />
            <Passfield
              placeholder="Confirm Password"
              placeholderTextColor="#666666"
              isPassword={true}
              leftImg={require('../assets/confirmpass.png')}
            />

          </View>
          <View
            style={{ alignItems: 'flex-end', marginTop: 10 }}>
          </View>
          <View style={{ top: 100 }}>
            <Btn textColor='white' bgColor='#FF4949' btnLabel="Reset Password" Press={() => navigation.navigate("Login")} />
          </View>
        </View>
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
    left: 50

  },
  login: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    top: 36,
    left: 36,

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

