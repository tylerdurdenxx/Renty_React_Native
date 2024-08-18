import React from 'react';
import {View, Image, StyleSheet} from 'react-native';


const Background = ({ children }) => {

    return (
<View>

  <Image
          source={require('../assets/circle.png')} 
          style={{
            width: 420,
            height: 430,
            position: "absolute",

          }}
          
   />
<View style={{ position: "absolute" }}>
 {children}
</View>
</View>

  )
}


export default Background;