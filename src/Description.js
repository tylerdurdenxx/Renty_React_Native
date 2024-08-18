import React from 'react'
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';

const Description = ({ navigation }) => {

    const img1 = require('../assets/desc/desc1.png')
    const img2 = require('../assets/desc/desc2.png')
    const img3 = require('../assets/desc/desc3.png')
    const img4 = require('../assets/desc/desc4.png')


    const pics = [
        { id: 1, image: img1 },
        { id: 2, image: img2 },
        { id: 3, image: img3 },
        { id: 4, image: img4 }
    ]

    const renderSwiper = () => {
        return (
            <Swiper style={{ height: 242 }} dotStyle={{ marginBottom: -30 }} activeDotStyle={{ marginBottom: -30 }} >
                {pics.map((item) => (
                    <View key={item.id}>
                        <Image style={{ width: 350, height: 242, marginVertical: 20, }} source={item.image} />
                    </View>
                ))}
            </Swiper>
        );
    };

    const cimg1 = require('../assets/desc/desc11.png')
    const cimg2 = require('../assets/desc/desc22.png')
    const cimg3 = require('../assets/camera/cam3.png')
    const cimg4 = require('../assets/camera/cam4.png')
    const camstarimg = require('../assets/nearby/star.png')
    const heartimg = require('../assets/heart.png')


    const camera = [
        {
            name: 'Canon EOS D6 Digital Camera',
            image: cimg1,
            desc: 'Compact 20.2MP full-frame camera kit with 1080p HD video, 4.5fps shooting, 11-point AF, and essential accessories',
            price: 'from Rs 20,000 /Month',
            area: 'North-karachi,karachi',
            name2: 'Shahid Khan',
            starimage: camstarimg,
            camheart: heartimg
        },
        {
            name: 'Canon EOS D6 Digital Camera',
            image: cimg2,
            desc: 'Compact 20.2MP full-frame camera kit with 1080p HD video, 4.5fps shooting, 11-point AF, and essential accessories',
            price: 'from Rs 20,000 /Month',
            area: 'North-karachi,karachi',
            name2: 'Shahid Khan',
            starimage: camstarimg,
            camheart: heartimg
        },
        {
            name: 'Canon EOS D6 Digital Camera',
            image: cimg3,
            desc: 'Compact 20.2MP full-frame camera kit with 1080p HD video, 4.5fps shooting, 11-point AF, and essential accessories',
            price: 'from Rs 20,000 /Month',
            area: 'North-karachi,karachi',
            name2: 'Shahid Khan',
            starimage: camstarimg,
            camheart: heartimg
        },
        {
            name: 'Canon EOS D6 Digital Camera',
            image: cimg4,
            desc: 'Compact 20.2MP full-frame camera kit with 1080p HD video, 4.5fps shooting, 11-point AF, and essential accessories',
            price: 'from Rs 20,000 /Month',
            area: 'North-karachi,karachi',
            name2: 'Shahid Khan',
            starimage: camstarimg,
            camheart: heartimg
        }
    ]

    const camRender = ({ item }) => {
        return (
            <View style={{
                flexDirection: 'column',
                width: 241,
                height: 321,
                borderRadius: 10,
                justifyContent: 'center',
                marginHorizontal: 10,
                borderWidth: 0.2
            }}>
                <TouchableOpacity>
                    <Image style={{ alignSelf: 'flex-end', top: -25, right: 15 }} source={item.camheart} />

                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                    <Image style={{ alignSelf: 'center' }} source={item.image} />
                    <Text style={{ width: 205, height: 19, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ width: 201, height: 15 }}>{item.desc}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.area}</Text>
                    <Image source={item.starimage} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <View style={{
                        width: 350,
                        height: 286,
                        backgroundColor: 'white',
                        borderRadius: 6,
                        marginVertical: 3.5
                    }}>
                        {renderSwiper()}
                    </View>


                    <View style={{
                        shadowColor: '#E1E1E2',
                        shadowOffset: { width: 7, height: 7 },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        borderRadius: 6,

                    }}>
                        <View style={{
                            width: 350,
                            height: 89,
                            backgroundColor: 'white',
                            borderRadius: 6,
                            marginVertical: 3.5

                        }}>
                            <Text style={{ fontWeight: 700, fontSize: 18, padding: 5 }}>
                                Matte Box for DSLR cameras
                            </Text>
                            <Text style={{ padding: 5 }}>
                                <Text style={{ color: '#FF4949', fontSize: 18, fontWeight: 700, }}>
                                    Rs 5000
                                </Text>
                                <Text style={{ fontSize: 12, fontWeight: 400, color: '#666666' }}>
                                    /Month
                                </Text>
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Image source={require('../assets/camerapage/mapmark.png')} />
                                    <Text style={{ color: '#666666', fontSize: 12, fontWeight: 500, left: 4 }}>Gulshan,karachi</Text>
                                </View>

                                <Text style={{ fontSize: 12, fontWeight: 700, color: '#FF4949' }}>Available for rent</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        shadowColor: '#E1E1E2',
                        shadowOffset: { width: 7, height: 7 },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        borderRadius: 6,

                    }}>

                        <View style={{
                            width: 350,
                            height: 284,
                            backgroundColor: 'white',
                            borderRadius: 6,
                            marginVertical: 3.5,
                            padding: 2
                        }}>

                            <Text style={{ fontSize: 16, fontWeight: 700, padding: 5, marginVertical: 7 }}>Description: </Text>
                            <Text style={{ fontWeight: 500, fontSize: 14, color: '#666666CC', padding: 5 }}>
                                Matte Box for DSLR with standard mount for 15mm rods

                                comes with:
                            </Text>

                            <View style={{}}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 5, marginVertical: 7 }}>
                                    <Text style={{ fontWeight: 700, fontSize: 12, color: '#FF4949' }}>Read More</Text>
                                    <Image style={{ left: 4 }} source={require('../assets/downred.png')} />
                                </TouchableOpacity>

                            </View>


                            <Text style={{ fontSize: 16, fontWeight: 700, padding: 5, marginVertical: 2 }}>Quantity Available: <Text style={{
                                fontWeight: 700, fontSize: 14, color: '#666666'
                            }}>1 </Text> </Text>

                            <Text style={{ fontSize: 16, fontWeight: 700, padding: 5, }}>Deposite: <Text style={{
                                fontWeight: 700, fontSize: 14, color: '#666666'
                            }}>RS 100 </Text> </Text>

                            <Text style={{ fontSize: 16, fontWeight: 700, padding: 5, marginVertical: 2 }}>Minimum Quantity for rent:  <Text style={{
                                fontWeight: 700, fontSize: 14, color: '#666666'
                            }}>1 </Text></Text>


                            <Text style={{
                                fontSize: 12, fontWeight: 600,
                                color: '#666666', alignSelf: 'center',
                                borderWidth: 0.1, borderRadius: 6,
                                backgroundColor: '#FFE4E4',
                                borderColor: '#FFE4E4',
                                padding: 2,
                                top: 22

                            }}>
                                Penalty for late return
                                <Text style={{ fontWeight: 700, fontSize: 12, color: '#BA0F0F' }}> Rs 100 for 1 Day
                                </Text></Text>



                        </View>
                    </View>

                    <View style={{
                        shadowColor: '#E1E1E2',
                        shadowOffset: { width: 7, height: 7 },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        borderRadius: 6,

                    }}>

                        <View style={{
                            width: 350,
                            height: 72,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: 6,
                            marginVertical: 3.5
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                                <View style={{
                                    height: 50,
                                    width: 50,
                                    borderWidth: 1,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        style={{
                                            height: 24,
                                            width: 23,
                                        }}
                                        source={require('../assets/desc/usericon.png')} />
                                </View>


                                <View style={{ padding: 6 }}>
                                    <Text style={{ fontWeight: 700, fontSize: 14 }}>Agha K</Text>
                                    <View style={{ flexDirection: 'row', top: 6 }}>
                                        <Text style={{ fontWeight: 700, fontSize: 12, color: '#FF4949', }}>See Profile  </Text>
                                        <Image source={require('../assets/desc/userArrow.png')} />
                                    </View>
                                </View>


                            </View>

                            <View>
                                <Image source={require('../assets/desc/userStars.png')} />

                                <Text> 123 reviews</Text>
                            </View>


                        </View>
                    </View>


                    <View style={{
                        shadowColor: '#E1E1E2',
                        shadowOffset: { width: 7, height: 7 },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        borderRadius: 6,
                    }}>

                        <View style={{
                            width: 350,
                            height: 66,
                            backgroundColor: 'white',
                            borderRadius: 6,
                            marginVertical: 3.5,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                            , alignItems: 'center'
                        }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Image source={require('../assets/desc/startdate.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Image source={require('../assets/desc/enddate.png')} />
                            </TouchableOpacity>


                        </View>
                    </View>




                    <View style={{
                        shadowColor: '#E1E1E2',
                        shadowOffset: { width: 7, height: 7 },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        borderRadius: 6,
                    }}>
                        <View style={{
                            width: 350,
                            height: 264,
                            backgroundColor: 'white',
                            borderRadius: 6,
                            marginVertical: 3.5
                        }}>

                            <Text style={{ padding: 5, fontSize: 16, fontWeight: 700, top: 15 }}>Pickup location:</Text>

                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, top: -5 }}>

                                <Image style={{
                                    width: 315,
                                    height: 148,
                                    position: 'absolute'
                                }} source={require('../assets/desc/map1.png')} />


                                <Image style={{
                                    width: 178,
                                    height: 43,
                                    position: 'relative'
                                }} source={require('../assets/desc/overmap.png')} />
                            </View>


                            <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'center', top: -20 }}>
                                <Image source={require('../assets/camerapage/mapmark.png')} />
                                <Text style={{ fontSize: 14, fontWeight: 500, color: '#666666' }}> 15B Block 13 A Gulshan-e-Iqbal, Karachi</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        width: 350,
                        height: 371,
                        marginVertical: 20
                    }}>
                        <Text style={{ fontSize: 24, fontWeight: 700, paddingBottom: 10 }}> You Might Like</Text>

                        <FlatList
                            data={camera}
                            renderItem={camRender}
                            horizontal={true} />

                    </View>



                </View>

            </ScrollView>

            <View style={{
                bottom: 0, width: 410, height: 75, borderTopColor: '#999999', borderTopWidth: 0.2,
            }}>


                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', paddingHorizontal: 40, paddingVertical: 13


                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/desc/booknow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/desc/chat.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Description
