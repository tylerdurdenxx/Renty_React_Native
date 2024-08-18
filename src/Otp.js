import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import Background from './Background';
import Btn from './Btn';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Otp({ route, navigation }) {
  const { email, phoneNumber } = route.params;
  const [otp, setOtp] = useState('');

  const handleVerify = async () => {
    try {
      console.log(email,'email');
      console.log(otp,'email');
      const response = await axios.post('http://52.184.84.66:8080/api/v1/verify', { "otp":otp, "email":email });
const loginToken = response.data.data.loginToken
      if (response.data.data.loginToken) {
        await AsyncStorage.setItem('token', response.data.data.loginToken);
        Alert.alert('Success', 'OTP verified successfully!');
        navigation.navigate('Edit',{loginToken});
      } else {
        Alert.alert('Error', 'Invalid OTP.');
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post('http://52.184.84.66:8080/api/v1/resendOtp', { email });
      Alert.alert('Success', 'OTP has been resent to your email address.');
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Background>
        <View style={styles.container}>
          <Text style={styles.otpTitle}>Enter OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />
          <Btn textColor='white' bgColor='#FF4949' btnLabel="Verify OTP" Press={handleVerify} />
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </Background>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  otpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
  },
  resendText: {
    fontSize: 16,
    color: '#FF4949',
    marginTop: 10,
  },
});
