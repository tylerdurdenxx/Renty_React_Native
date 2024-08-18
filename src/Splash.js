// Splash.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay (e.g., 3 seconds) before navigating to the home screen
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Replace with the name of your home screen
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash/renty.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set your desired background color
  },
  logo: {
    width: 222, // Set your desired width
    height: 132, // Set your desired height
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
});

export default Splash;
