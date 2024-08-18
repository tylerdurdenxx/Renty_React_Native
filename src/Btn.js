import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useEffect } from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
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
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 244,
        height: 43,
        gap: 10,
        left: 37,
        paddingVertical: 5,
        marginVertical: 10
      }}>
      <Text style={{color: textColor, fontSize: 18, margin: 4,}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}