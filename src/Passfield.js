import React, { useState } from 'react';
import { TextInput, View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { useEffect } from 'react';
import * as Font from 'expo-font';


const Passfield = ({ placeholder, isPassword, leftImg, isEmail, ...rest }) => {
 const [ isShow, setIsShow] = useState(true) 
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
    <View style={styles.inputContainer}>

      {leftImg && (

        <Image
          source={leftImg}
          style={styles.Licon}
        />
      )}


      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isShow}
        placeholderTextColor="#666666"
        {...rest}
      />


      {isPassword && (

        <TouchableOpacity onPress={() => setIsShow((prev) => !prev )} style={styles.iconContainer}>
          <Image
            source={require('../assets/eye.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    borderWidth: 0,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: 244,
    height: 43,
    top: 88,
    left: 28,
   
    fontSize: 14,

  },
  input: {
    flex: 1,
    height: 40,
    color: '#666666',
    fontSize: 14,
   
    marginLeft: 5
  },
  iconContainer: {
    padding: 0,
  },
  EiconContainer: {
    padding: 0,
  },
  icon: {
    width: 28,
    height: 20,
    resizeMode: 'contain',
    right: -8

  },
  Licon: {
    width: 19,
    height: 18,
    resizeMode: 'contain',
    marginRight: 10
  },
});

export default Passfield;
