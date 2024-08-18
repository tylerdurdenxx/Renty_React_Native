import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, ScrollView, Modal, } from 'react-native';

import React, { useState } from 'react';

export default function Camera({ navigation }) {

  const [selectedSort, setSelectedSort] = useState('mostPopular');

  const [isSortModalVisible, setSortModalVisible] = useState(false);

  const [ selectedItem, setSelectedItem ] = useState('All')

  const handleSelect = (item) => {
    setSelectedItem(item)
  }
  const toggleSortModal = () => {
    setSortModalVisible(!isSortModalVisible);
  };

  const handleSortChange = (sortType) => {
    setSelectedSort(sortType);
    toggleSortModal(); // Close the modal after selecting an option
  };


  const top = [
    { name: 'All' },
    { name: 'Digital Cameras' },
    { name: 'Lenses' },
    { name: 'Compact Cameras' },
    { name: 'Action Cameras' },
    { name: 'Camcoders' },
  ]

  const img1 = require('../assets/camerapage/img1.png')
  const img2 = require('../assets/camerapage/img2.png')
  const img3 = require('../assets/camerapage/img3.png')
  const img4 = require('../assets/camerapage/img4.png')
  const starimg = require('../assets/nearby/star.png')
  const mapmark = require('../assets/camerapage/mapmark.png')

  const campic = [
    {
      name: 'Panasonic LUMIX DMC-FZ2500 Digital Camera',
      image: img1,
      desc: '20.1 megapixel,4K video with Leica Lens',
      price: 'Rs 5,000',
      area: 'North-karachi,karachi',
      starimg: starimg,
      mapmark: mapmark
    },
    {
      name: 'Panasonic LUMIX DMC-FZ2500 Digital Camera',
      image: img2,
      desc: '20.1 megapixel,4K video with Leica Lens',
      price: 'Rs 5,000',
      area: 'North-karachi,karachi',
      starimg: starimg,
      mapmark: mapmark
    },
    {
      name: 'Panasonic LUMIX DMC-FZ2500 Digital Camera',
      image: img3,
      desc: '20.1 megapixel,4K video with Leica Lens',
      price: 'Rs 5,000',
      area: 'North-karachi,karachi',
      starimg: starimg,
      mapmark: mapmark
    },
    {
      name: 'Panasonic LUMIX DMC-FZ2500 Digital Camera',
      image: img4,
      desc: '20.1 megapixel,4K video with Leica Lens',
      price: 'Rs 5,000',
      area: 'North-karachi,karachi',
      starimg: starimg,
      mapmark: mapmark
    }
  ]
  return (
    <ScrollView>
      <View>
        <FlatList
          style={{
            padding: 10,
            paddingLeft: 10,
          }}
          data={top}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={{
                backgroundColor: selectedItem === item.name ? '#FF4949' : '#E1E1E2',
                width: 15 + item.name.length * 10,
                height: 44,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 5,
              }} 
              onPress={() => {
                handleSelect(item.name)
              }}
              >
                <Text style={{
                  color: selectedItem === item.name ? 'white' : 'black'
                }}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
          horizontal={true}
        />

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10
        }}
        >
          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E1E1E2B2',
            borderRadius: 22,
            padding: 10,
            height: 31,
            width: 92,
            left: 12

          }}
            onPress={toggleSortModal}
          >
            <Text style={{ fontWeight: 700, height: 17, width: 52 }}>Sort by</Text>
            <Image style={{ marginLeft: 4 }}
              source={require('../assets/camerapage/sort.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E1E1E2B2',
            borderRadius: 22,
            padding: 10,
            height: 31,
            width: 92,
            right: 12
          }}
          onPress={() => {
            navigation.navigate('Filter')}}>
            <Image style={{ marginRight: 4 }} source={require('../assets/camerapage/filter.png')} />
            <Text style={{ fontWeight: 700, height: 17, width: 52 }}>Filters</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={{
            padding: 10, paddingLeft: 10, paddingBottom: 30
          }}
          data={campic}
          renderItem={({ item }) => (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderWidth: 0.2,
              marginBottom: 10,
              borderRadius: 15,
              padding: 10,
              margin: 10,
            }}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Description')}>
                  <Image style={{ width: 110, height: 100 }} source={item.image} />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 2, marginLeft: 10, padding: 10, }}>
                <TouchableOpacity>
                  <Text style={{ width: 194, height: 19, fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ width: 191, height: 15, fontSize: 12, marginBottom: 5 }}>{item.desc}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ fontSize: 12, height: 17, width: 140, color: "#666666", marginBottom: 4 }}><Text>from</Text> <Text style={{ color: '#FF4949', fontSize: 14, fontWeight: 'bold' }}>{item.price}</Text> <Text>/Month</Text></Text>

                </TouchableOpacity>


                <TouchableOpacity style={{ flexDirection: 'row', }}>
                  <Image style={{ width: 8, height: 10 }} source={mapmark} />
                  <Text style={{ color: '#666666', marginBottom: 5, marginLeft: 3, fontSize: 10, fontWeight: 500, width: 111, height: 12 }}>{item.area}</Text>
                </TouchableOpacity>


                <TouchableOpacity>
                  <Image style={{}} source={starimg} />
                </TouchableOpacity>
              </View>

            </View>
          )}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSortModalVisible}
        onRequestClose={toggleSortModal}
      >
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
          <View style={{
            backgroundColor: 'white',
            width: '100%',
            padding: 20,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{ fontSize: 14, fontWeight: 600, marginBottom: 15, }}>SORT BY</Text>
              <TouchableOpacity onPress={toggleSortModal}>
              <Image style={{height: 8, width: 8}} source={require('../assets/camerapage/x.png')} />
              </TouchableOpacity>
            </View>


            <TouchableOpacity
              style={[styles.radioButton, selectedSort === 'mostPopular' ? styles.selectedRadio : styles.unselectedRadio]}
              onPress={() => handleSortChange('mostPopular')}
            >
              <Text style={[selectedSort === 'mostPopular' ? styles.selectedText : styles.unselectedText]}>Most Popular</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.radioButton, selectedSort === 'highToLow' ? styles.selectedRadio : styles.unselectedRadio]}
              onPress={() => handleSortChange('highToLow')}
            >
              <Text style={[selectedSort === 'highToLow' ? styles.selectedText : styles.unselectedText]}>Price (high to low)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.radioButton, selectedSort === 'lowToHigh' ? styles.selectedRadio : styles.unselectedRadio]}
              onPress={() => handleSortChange('lowToHigh')}
            >
              <Text style={[selectedSort === 'lowToHigh' ? styles.selectedText : styles.unselectedText]}>Price (low to high)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.radioButton, selectedSort === 'newArrivals' ? styles.selectedRadio : styles.unselectedRadio]}
              onPress={() => handleSortChange('newArrivals')}
            >
              <Text style={[selectedSort === 'newArrivals' ? styles.selectedText : styles.unselectedText]}>New Arrivals</Text>
            </TouchableOpacity>

          </View>


        </View>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  radioButton: {
    paddingVertical: 5,
  },

  unselectedRadio: {
  },
  unselectedText: {
    color: '#999999', 
  },
  selectedText: {
    color: '#FF4949'
  },
  selectedRadio: {
  }
});