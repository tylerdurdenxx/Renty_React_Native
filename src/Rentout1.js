import React from 'react'
import { View, StyleSheet, Text, Image , TouchableOpacity } from 'react-native';

function Rentout1({ navigation }) {
  return (
    <View>
      <Text style={{fontSize: 16, fontWeight: 800, padding: 20}}>What are you offering?</Text>

    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <Image style={styles.image} source={require('../assets/phone.png')} />
        <Text style={{fontWeight: 600, fontSize: 14}}>Phone & Tablets</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Image style={styles.image} source={require('../assets/pc.png')} />
        <Text style={{fontWeight: 600, fontSize: 14}}>Computers</Text></TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Rentout2')} style={styles.box}>
        <Image style={styles.image} source={require('../assets/camera.png')} />
        <Text style={{fontWeight: 600, fontSize: 14}}>Cameras</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Image style={styles.image} source={require('../assets/drone.png')} />
        <Text style={{fontWeight: 600, fontSize: 14}}>Gaming & VR</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Image style={styles.image} source={require('../assets/vr.png')} />
        <Text style={{fontWeight: 600, fontSize: 14}}>Drones</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Image style={styles.image} source={require('../assets/projector.png')} />
        <Text style={{fontWeight: 600, fontSize: 14}}>Projectors</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Image style={{height: 69, width: 96 }} source={require('../assets/speaker.png')} />
        <Text style={{fontWeight: 600, fontSize: 14}}>Music & Audio</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Image style={{width: 96, height: 74}} source={require('../assets/printer.png')} />
        <Text style={{fontWeight: 600, fontSize: 14}}>Printers</Text>
        </TouchableOpacity>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange boxes in rows
    flexWrap: 'wrap', 
    justifyContent: 'space-between', // Align boxes with equal space between them
    paddingHorizontal: 30,
    top: 10
  },
  box: {
    width: 160, // Adjust width as needed
    height: 107, // Adjust height as needed
    backgroundColor: '#E1E1E24D', 
    marginBottom: 10, 
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FF4949',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 73,
    width: 96
  },

});

export default Rentout1
