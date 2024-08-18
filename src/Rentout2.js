import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Rentout3 from './Rentout3'
const Rentout2 = ({ navigation }) => {
        return (


                <View style={{
                        flex: 1, alignItems: 'center',
                }}>

                        <TouchableOpacity onPress={() => navigation.navigate(Rentout3)} style={styles.container}>
                                <Text>Digital Cameras</Text>
                                <Image source={require('../assets/desc/userArrow.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container}>
                                <Text>Lenses</Text>
                                <Image source={require('../assets/desc/userArrow.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container}>
                                <Text>Compact Cameras</Text>
                                <Image source={require('../assets/desc/userArrow.png')} />
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.container}>
                                <Text>Action Cameras</Text>
                                <Image source={require('../assets/desc/userArrow.png')} />
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.container}>
                                <Text>Camcoders</Text>
                                <Image source={require('../assets/desc/userArrow.png')} />
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.container}>
                                <Text>Cinema Cameras</Text>
                                <Image source={require('../assets/desc/userArrow.png')} />
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.container}>
                                <Text>Instant Cameras</Text>
                                <Image source={require('../assets/desc/userArrow.png')} />
                        </TouchableOpacity>


                </View>

        )
}

const styles = StyleSheet.create({
        container: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 16,
                borderBottomWidth: 1,
                width: 365,
                top: 20
        }
})
export default Rentout2
