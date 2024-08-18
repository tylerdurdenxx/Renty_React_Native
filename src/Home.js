import { Text, View, Image, TextInput, FlatList, TouchableOpacity, ScrollView,  } from 'react-native';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
  const colorScheme = useColorScheme()

  const styles = {
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'light' ? 'white' : 'grey',
    },
  };

  const ad = [
    { id: 1, image: require('../assets/ad.png') },
    { id: 2, image: require('../assets/ad2.png') },
  ]
  const image1 = require('../assets/phone.png')
  const image2 = require('../assets/pc.png')
  const image3 = require('../assets/camera.png')
  const image4 = require('../assets/drone.png')
  const image5 = require('../assets/vr.png')
  const image6 = require('../assets/projector.png')
  const image7 = require('../assets/speaker.png')
  const image8 = require('../assets/printer.png')

  const cat = [
    { name: 'Phone & Tablets', image: image1 },
    { name: 'Computers', image: image2 },
    { name: 'Cameras', image: image3 },
    { name: 'Drones', image: image4 },
    { name: 'Gaming & VR', image: image5 },
    { name: 'Projectors', image: image6 },
    { name: 'Music & Audio', image: image7 },
    { name: 'Printers', image: image8 },

  ]
  const render = ({ item }) => {
    return (
      <View >
        <TouchableOpacity style={{
          backgroundColor: '#E1E1E2',
          width: 150,
          height: 142,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 5,
        }}
          onPress={() => {
            if (item.name === 'Cameras') {
              navigation.navigate('Camera')
            }
          }}
        >
          <Image source={item.image} />
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }


  const nearimg1 = require('../assets/nearby/drone2.png')
  const nearimg2 = require('../assets/nearby/sound.png')
  const nearimg3 = require('../assets/nearby/dell.png')
  const nearimg4 = require('../assets/nearby/headset.png')
  const starimg = require('../assets/nearby/star.png')
  const heartimg = require('../assets/heart.png')
  const nearby = [
    {
      name: 'DJI Marvic 2 Pro Drone with Smart Controller',
      desc: 'DJI Mavic 2 Pro + Smart Controller for rent. FAA-compliant. Capture stunning footage',
      price: 'from Rs 8,000 /Month',
      area: 'North-karachi,karachi',
      name2: 'Shahid Khan',
      image: nearimg1,
      starimage: starimg,
      heart1: heartimg
    },
    {
      name: 'Sound System Set up with Amps, Mixer, and Cordless Mic',
      desc: 'PR® 15 Speaker + XR-S Mixer (1,000W) with Bluetooth. Samson Concert 88x Wireless Mic included',
      price: 'from Rs 30,000 /Month ',
      area: 'North-karachi,karachi',
      name2: 'Misbah Khan',
      image: nearimg2,
      starimage: starimg,
      heart1: heartimg
    },
    {
      name: 'Dell Latitude 7400 Hybrid 2-1 Touchscreen Laptop',
      desc: 'Dell Latitude 7400: Slim 2-in-1 laptop, 10th-Gen i7, 16GB RAM, 512GB SSD. Stylish design, lightweight, and durable',
      price: 'from Rs 20,000 /Month',
      area: 'North-karachi,karachi',
      name2: 'Shahid Khan',
      image: nearimg3,
      starimage: starimg,
      heart1: heartimg
    },
    {
      name: 'Oculus Rift S VR Headset',
      desc: 'Play games, create 3D art, and more (requires your own gaming PC). Ideal for parties, team building, and all-around fun.',
      price: 'from Rs 8,000 /Month',
      area: 'North-karachi,karachi',
      name2: 'Shahid Khan',
      image: nearimg4,
      starimage: starimg,
      heart1: heartimg
    },
  ]

  const nearbyRender = ({ item }) => {
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
          <Image style={{ alignSelf: 'flex-end', top: -25, right: 15 }} source={item.heart1} />
        </TouchableOpacity>


        <TouchableOpacity style={{
        }}>
          <Image style={{ alignSelf: 'center' }} source={item.image} />
          <View style={{ paddingHorizontal: 15, top: 20 }}>
            <Text style={{ width: 205, height: 19, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ width: 201, height: 15 }}>{item.desc}</Text>
            <Text>{item.price}</Text>
            <Text>{item.area}</Text>
            <Image source={item.starimage} />
          </View>

        </TouchableOpacity>
      </View>
      // </View>
    )
  }


  const vrimg1 = require('../assets/vr/vr1.png')
  const vrimg2 = require('../assets/vr/vr2.png')
  const vrimg3 = require('../assets/vr/vr3.png')
  const vrimg4 = require('../assets/vr/vr4.png')
  const starimgvr = require('../assets/nearby/star.png')

  const vr = [
    {
      name: 'Oculus Meta Quest 2 VR Headset 128GB',
      desc: '256GB VR bundle, 6DOF tracking, redesigned controllers, choice of head strap, accessories, travel case.',
      price: 'from Rs 8,000 /Month',
      area: 'North-karachi,karachi',
      name2: 'Shahid Khan',
      image: vrimg1,
      starimage: starimgvr,
      vrheart: heartimg
    },
    {
      name: 'Meta Quest 2 VR headset',
      desc: 'Heres your chance to try VR at fraction of the cost and no extra equipment needed.',
      price: 'from Rs 30,000 /Month ',
      area: 'North-karachi,karachi',
      name2: 'Misbah Khan',
      image: vrimg2,
      starimage: starimgvr,
      vrheart: heartimg
    },
    {
      name: 'PlayStation VR2',
      desc: '4K HDR visuals, Sense technology, 30+ games, and quick setup for the ultimate gaming experience',
      price: 'from Rs 20,000 /Month',
      area: 'North-karachi,karachi',
      name2: 'Shahid Khan',
      image: vrimg3,
      starimage: starimgvr,
      vrheart: heartimg
    },
    {
      name: 'Oculus Rift S VR Headset',
      desc: 'Play games, create 3D art, and more (requires your own gaming PC). Ideal for parties, team building, and all-around fun.',
      price: 'from Rs 8,000 /Month',
      area: 'North-karachi,karachi',
      name2: 'Shahid Khan',
      image: vrimg4,
      starimage: starimgvr,
      vrheart: heartimg
    },
  ]


  const vrRender = ({ item }) => {
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
          <Image style={{ alignSelf: 'flex-end', top: -25, right: 15 }} source={item.vrheart} />

        </TouchableOpacity>
        <TouchableOpacity style={{
        }}>
          <Image style={{ alignSelf: 'center' }} source={item.image} />
          <View style={{ paddingHorizontal: 15, top: 20 }}>

            <Text style={{ width: 205, height: 19, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ width: 201, height: 15 }}>{item.desc}</Text>
            <Text>{item.price}</Text>
            <Text>{item.area}</Text>
            <Image source={item.starimage} />
          </View>

        </TouchableOpacity>
      </View>
    )
  }


  const cimg1 = require('../assets/camera/cam1.png')
  const cimg2 = require('../assets/camera/cam2.png')
  const cimg3 = require('../assets/camera/cam3.png')
  const cimg4 = require('../assets/camera/cam4.png')
  const camstarimg = require('../assets/nearby/star.png')

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
          <View style={{ paddingHorizontal: 15, top: 20 }}>
            <Text style={{ width: 205, height: 19, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ width: 201, height: 15 }}>{item.desc}</Text>
            <Text>{item.price}</Text>
            <Text>{item.area}</Text>
            <Image source={item.starimage} />
          </View>

        </TouchableOpacity>
      </View>
    )
  }





  return (
    <View style={styles.container}>

      <ScrollView style={{
        flex: 1,
        flexDirection: "column",
      }}>
        <View >

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 25,
            height: 60,
            top: 15

          }}>

            <View style={{
              flex: 1,
              alignItems: 'flex-start'
            }}>
              <Image
                source={require('../assets/Rentify.png')}
                style={{

                }}
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 17,
              }}>
              <Image
                source={require('../assets/bell.png')}
                style={{
                  width: 19,
                  height: 21
                }}
              />
              <Image
                source={require('../assets/cart.png')}
                style={{
                  width: 21,
                  height: 21
                }}
              />
            </View >


          </View>



          <TouchableOpacity style={{
            flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 30
          }} onPress={() => navigation.navigate('Login')}>

            <Image source={require('../assets/camerapage/mapmark.png')} />
            <Text style={{ fontWeight: 500, fontSize: 14, width: 133, height: 17, left: 8 }}>Gulshan, Karachi</Text>
            <Image style={{ width: 12, height: 8, left: -8 }} source={require('../assets/down.png')} />
          </TouchableOpacity>


          <View style={{
            flex: 1,
            alignItems: "center",
            shadowColor: 'black',
          }}>

            <TextInput
              style={{
                top: 50,
                width: 335,
                height: 43,
                margin: 10,
                paddingLeft: 21,
                paddingTop: 3,
                borderColor: 'grey',
                borderRadius: 100,
                borderWidth: 0.3,
              }}
              placeholder='Search'
              placeholderTextColor='#99999980'
            />


          </View>


          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            top: 90
          }}>
            <Image

              source={require('../assets/ad.png')} />

          </View>

          {/* <AdCarousel ads={ad} /> */}

          <View style={{
            top: 120,
            marginVertical: 10,
            marginLeft: 15,


          }}>
            <Text
              style={{ fontWeight: 700, padding: 10, fontSize: 24 }}>
              Categories
            </Text>

            <View >
              <FlatList
                data={cat}
                renderItem={render}
                horizontal={true}

              />


              <View style={{}}>
                <Text style={{ fontSize: 24, fontWeight: 700, padding: 10 }}>Rental Nearby You</Text>
                <FlatList
                  data={nearby}
                  renderItem={nearbyRender}
                  horizontal={true}
                />

                <Text style={{ fontSize: 24, fontWeight: 700, padding: 10 }}>Recommended For You</Text>
                <FlatList
                  data={nearby}
                  renderItem={nearbyRender}
                  horizontal={true}
                />
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                  <Text style={{ flex: 1, fontSize: 24, fontWeight: 700 }}>VR Headsets</Text>
                  <TouchableOpacity>
                    <Text style={{ color: 'red', alignItems: 'flex-end' }}>See more</Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  data={vr}
                  renderItem={vrRender}
                  horizontal={true}
                />
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                  <Text style={{ flex: 1, fontSize: 24, fontWeight: 700 }}>Camera Accessories</Text>
                  <TouchableOpacity>
                    <Text style={{ color: 'red', alignItems: 'flex-end' }} onPress={() => navigation.navigate('Camera')} >See more</Text>
                  </TouchableOpacity>
                </View>
                <FlatList style={{ paddingBottom: 220, }}
                  data={camera}
                  renderItem={camRender}
                  horizontal={true}
                />
              </View>

            </View>

          </View>

        </View>

      </ScrollView>
      <View style={{
        bottom: 0, width: 410, height: 76, borderTopColor: '#999999', borderTopWidth: 0.5,
      }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          alignItems: 'center', paddingHorizontal: 18, paddingVertical: 13
        }}>
          <TouchableOpacity style={{ alignItems: 'center', }}
            onPress={() => navigation.navigate('Login')}
          >
            <Image source={require('../assets/footerpic/fhome.png')} />
            <Text>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image source={require('../assets/footerpic/ffav.png')} />
            <Text>Wish list</Text>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => navigation.navigate('Rentout1')} 
          style={{ alignItems: 'center', top: -10 }}>
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
            <Image source={require('../assets/footerpic/faccount.png')} />
            <Text>Account </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>

  )
}


