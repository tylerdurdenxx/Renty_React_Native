import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
  
  const handleLogout = async () => {
    try {
      // Get the loginToken from AsyncStorage
      const loginToken = await AsyncStorage.getItem('token');
      
      // If there's no token, show an error and return
      if (!loginToken) {
        Alert.alert('Error', 'No token found. Please log in.');
        return;
      }

      // Call the logout API
      const response = await axios.post('http://52.184.84.66:8080/api/v1/logout', {
        loginToken,
      });

      if (response.data.status === 'SUCCESS') {
        // Clear user data from AsyncStorage
        // await AsyncStorage.clear();
        await AsyncStorage.setItem('token', '');

        // Navigate to the login screen or home screen
        navigation.navigate('Login'); // Replace 'Login' with your login screen name

        Alert.alert('Success', 'You have been logged out.');
      } else {
        Alert.alert('Error', 'Failed to logout.');
      }
    } catch (error) {
      console.error('Logout error:', error);
      Alert.alert('Error', 'An error occurred while logging out.');
    }
  };
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>

            <View style={{ flexDirection: 'column', justifyContent: 'center', }}>

                <Image
                    source={require('../assets/profile/red.png')}
                    style={{
                        width: 420,
                        height: 380,
                        top: -165,
                        position: "absolute",
                    }}

                />
                                 <Image style={{ 
                                 position: 'absolute',
                                 alignSelf: 'center', top:25}} source={require('../assets/profile/pfp.png')} />

                                 <Text style={{  position: 'absolute',
                                 alignSelf: 'center', top:130,
                                 fontWeight: 700, fontSize: 18 , color: 'white'
                                 }}>Asad Ali</Text>

            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center', top: 172 }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderRadius: 8,
                    backgroundColor: '#FFEDED',
                    height: 79,
                    width: 335,
                    shadowColor: '#00000026',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 8
                }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/profile/redStar.png')} />
                        <Text style={{ fontSize: 14, fontWeight: 700 }}>5 star</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/profile/feedback.png')} />
                        <Text style={{ fontSize: 14, fontWeight: 700 }}>123 reviews</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                        <Image source={require('../assets/profile/products.png')} />
                        <Text style={{ fontSize: 14, fontWeight: 700 }}>4 products</Text>
                    </View>

                </View>

            </View>

            <View style={{ top: 200, paddingHorizontal: 30, }}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit')}>

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                        marginBottom: 10,
                        borderBottomWidth: 2,
                        borderColor: '#E1E1E2',
                        paddingVertical: 10
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/profile/note.png')} />
                            <Text style={{ fontWeight: 600, fontSize: 14 }}> Edit Profile</Text>
                        </View>

                        <Image source={require('../assets/profile/arrowRight.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                        marginBottom: 10,
                        borderBottomWidth: 2,
                        borderColor: '#E1E1E2',
                        paddingVertical: 10
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/profile/starBlack.png')} />
                            <Text style={{ fontWeight: 600, fontSize: 14 }}> Reviews</Text>
                        </View>

                        <Image source={require('../assets/profile/arrowRight.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                        borderBottomWidth: 2,
                        borderColor: '#E1E1E2',
                        paddingVertical: 10
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/profile/phone.png')} />
                            <Text style={{ fontWeight: 600, fontSize: 14 }}> Contact Us</Text>
                        </View>

                        <Image source={require('../assets/profile/arrowRight.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,
                        borderBottomWidth: 2,
                        borderColor: '#E1E1E2',
                        paddingVertical: 10
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/profile/terms.png')} />
                            <Text style={{ fontWeight: 600, fontSize: 14 }}> Terms and Conditions</Text>
                        </View>

                        <Image source={require('../assets/profile/arrowRight.png')} />
                    </View>

                </TouchableOpacity>

            </View>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', top: 225, }} onPress={handleLogout}>
                <View style={{
                    borderWidth: 3,
                    borderRadius: 27,
                    backgroundColor: '#E1E1E2',
                    borderColor: 'transparent',
                    width: 100,
                    height: 43,
                    alignItems: 'center'
                }}>
                    <Text style={{ padding: 8, fontWeight: 700, fontSize: 18, color: '#999999' }}>Logout</Text>

                </View>
            </TouchableOpacity>


            <View style={{
                bottom: -250, width: 410, height: 76, borderTopColor: '#999999', borderTopWidth: 0.5,
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', paddingHorizontal: 18, paddingVertical: 13
                }}>
                    <TouchableOpacity style={{ alignItems: 'center', }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Image source={require('../assets/profile/greyHome.png')} />
                        <Text>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../assets/footerpic/ffav.png')} />
                        <Text>Wish list</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center', top: -10 }}>
                        <Image style={{ width: 50, height: 50 }} source={require('../assets/footerpic/fadd.png')} />
                        <Text>Rent/Sell</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../assets/footerpic/fchat.png')} />
                        <Text>Chat</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center' }}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Image source={require('../assets/profile/redAccount.png')} />
                        <Text>Account </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>


    )
}

export default Profile
