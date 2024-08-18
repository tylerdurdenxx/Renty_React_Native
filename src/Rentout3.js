import React, { useState, useMemo } from 'react';
import { TextInput, View, Image, Text, TouchableOpacity, ScrollView, Button, Alert } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import axios from 'axios';

const Rentout3 = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [deposit, setDeposit] = useState('');
  const [location, setLocation] = useState({ lat: 40.7128, lon: -74.0060 }); // You can change this as needed
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedId, setSelectedId] = useState();
  const [images, setImages] = useState(["security-camera1.jpg", "security-camera2.jpg", "security-camera3.jpg"]);

  const radioButtons = useMemo(() => ([
    {
      id: '1',
      label: 'No Late Penalty',
      value: 'option1',
    },
    {
      id: '2',
      label: 'Apply Late Penalty',
      value: 'option2',
    },
  ]), []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleListProduct = async () => {
    const hasPenalty = selectedId === '2';
    const loginToken = 'sGKsSu'; // Replace with your actual loginToken

    const requestBody = {
      title,
      description,
      price: parseFloat(price),
      location,
      deposit: parseFloat(deposit),
      available: count > 0,
      rentalStartDate: startDate,
      rentalEndDate: endDate,
      hasPenalty,
      penaltyAmount: hasPenalty ? 25 : 0, // Customize the penalty amount if needed
      images,
      categoryId: "qIfBM5EBsRvlGADCxT77",
      subCategoryId: "26531283-ebd7-4b61-adb6-f50ba2852121"
    };

    try {
      const response = await axios.post(
`http://localhost:8081/lst/api/v1/listing/create?loginToken=${loginToken}`,
        requestBody
      );
      Alert.alert('Success', 'Product listed successfully!');
      navigation.navigate('Home'); // Replace 'Home' with your actual route name
    } catch (error) {
      console.error('Error listing product:', error);
      Alert.alert('Error', 'Failed to list the product.');
    }
  };

  return (
    <ScrollView style={{ width: 370, alignSelf: 'center' }}>
      <View style={{ backgroundColor: '#FFC7C7', height: 178, width: 334, justifyContent: 'center', alignItems: 'center', borderRadius: 8, flexDirection: 'row', gap: 5 }}>
        <Image source={require('../assets/Rent3/RedAdd.png')} />
        <Text style={{ fontSize: 16, fontWeight: 800 }}>Add Image</Text>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Category</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ borderRadius: 8, borderColor: '#FFC7C7', borderWidth: 1 }} source={require('../assets/camera.png')} />
          <View>
            <Text style={{ fontSize: 16, fontWeight: 700 }}>Cameras</Text>
            <Text style={{ fontSize: 16, fontWeight: 500, color: '#666666' }}>Digital Cameras</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Project Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={{ borderBottomWidth: 1, width: 335, alignSelf: 'center' }}
        />
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Product Description</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={{ width: 335, height: 95, borderRadius: 6, borderWidth: 1, alignSelf: 'center' }}
        />
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Product Rental Price</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#FF4949', fontSize: 16, fontWeight: 600 }}>Rs</Text>
          <TextInput
            value={price}
            onChangeText={setPrice}
            style={{ width: 118, borderBottomWidth: 1 }}
          />
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Location</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Choose a location</Text>
          <Image source={require('../assets/downred.png')} />
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Deposit</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Rs</Text>
          <TextInput
            value={deposit}
            onChangeText={setDeposit}
            placeholder='__________'
          />
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Quantity </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button title="-" onPress={decrement} color='#FF4949' />
          <Text style={{ color: '#FF4949' }}>{count}</Text>
          <Button title="+" onPress={increment} color='#FF4949' />
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Select Rental Period</Text>
        <View style={{ shadowColor: '#E1E1E2', shadowOffset: { width: 7, height: 7 }, shadowOpacity: 0.5, shadowRadius: 5, borderRadius: 6 }}>
          <View style={{ width: 350, height: 66, borderRadius: 6, marginVertical: 3.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setStartDate('2024-08-01T09:00:00')}>
              <Image source={require('../assets/desc/startdate.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEndDate('2024-12-31T09:00:00')}>
              <Image source={require('../assets/desc/enddate.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Penalty</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          containerStyle={{ alignItems: 'flex-start' }}
          labelStyle={{ fontSize: 14, fontWeight: 500 }}
          activeButtonColor="#FF4949"
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={handleListProduct}
          style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 27, backgroundColor: '#E1E1E2', height: 43, width: 337 }}
        >
          <Text style={{ fontSize: 18, fontWeight: 600 }}>List Product</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Rentout3;
