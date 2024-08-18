import React, { useRef, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';

const Filter = () => {
    const [fromPrice, setFromPrice] = useState('');
    const [toPrice, setToPrice] = useState('');
    const [rating, setRating] = useState('')

    const handleFromPrice = (text) => {
        setFromPrice(text);
    };

    const handleToPrice = (text) => {
        setToPrice(text);
    };

    const handleRating = (item) => {
        setRating(item)
    }
    const dismissKeyboard = () => {
          };

    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch' }}>
            <Text style={{ fontWeight: 700, fontSize: 13, margin: 40, }}>LOCATION</Text>

            <View style={{
                flexDirection: 'row', alignItems: 'center', marginLeft: 40, top: -25
            }}>

                <Text style={{ fontWeight: 500, fontSize: 14, width: 133, height: 17 }}>Gulshan, Karachi</Text>
                <Image style={{ width: 12, height: 8, left: -12 }} source={require('../assets/down.png')} />
            </View>


            <View style={{ top: 90 }}>
                <Text style={{ fontWeight: 700, fontSize: 12, top: -110, margin: 40 }}> MONTHLY PRICE</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', top: -175, margin: 40 }}>
                    <View >
                        <Text style={{ color: '#999999' }}>From</Text>

                        <View style={{ borderWidth: .5, width: 160, height: 35, borderRadius: 2, padding: 5, paddingLeft: 5, justifyContent: 'center' }}>
                            <TextInput placeholder="100" onChangeText={handleFromPrice} value={fromPrice} keyboardType="numeric" clearButtonMode="while-editing"
                                onSubmitEditing={dismissKeyboard}
                                />
                        </View>
                        <Text style={{ flexDirection: 'row', marginTop: 5, fontWeight: 500, fontSize: 14, color: '#666666' }}>PKR
                            <Text
                                style={{ color: '#000000' }}
                            >  {fromPrice}
                            </Text></Text>
                    </View>

                    <View>
                        <Text style={{ color: '#999999' }}>To</Text>

                        <View style={{ borderWidth: .5, width: 160, height: 35, borderRadius: 2, padding: 5, paddingLeft: 5, justifyContent: 'center' }}>
                            <TextInput placeholder="100000"
                                onChangeText={handleToPrice}
                                value={toPrice}
                                keyboardType="numeric"
                                clearButtonMode="while-editing"
                            //  onSubmitEditing={dismissKeyboard}
                            />

                        </View>
                        <Text style={{ flexDirection: 'row', marginTop: 5, fontWeight: 500, fontSize: 14, color: '#666666' }}>PKR
                            <Text style={{ color: '#000000' }}
                            >  {toPrice}
                            </Text></Text>

                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'column', top: -125 }}>

                <Text style={{ fontSize: 12, fontWeight: 700, margin: 50 }}>RATING</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 50
                    , top: -30
                }}>
                    <TouchableOpacity onPress={() => {
                        handleRating('r1')
                    }}>
                        <Image style={{ width: 55, height: 40 }} source={
                            rating === 'r1' ? require('../assets/filter/rg1.jpeg') : require('../assets/filter/r1.jpeg')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        handleRating('r2')
                    }}>
                        <Image style={{ width: 55, height: 40 }} source={rating === 'r2' ? require('../assets/filter/rg2.jpeg') : require('../assets/filter/r2.jpeg')} />
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => {
                        handleRating('r3')
                    }}>
                        <Image style={{ width: 55, height: 40 }} source={rating === 'r3' ? require('../assets/filter/rg3.jpeg') : require('../assets/filter/r3.jpeg')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        handleRating('r4')
                    }}>
                        <Image style={{ width: 55, height: 40 }} source={rating === 'r4' ? require('../assets/filter/rg4.jpeg') : require('../assets/filter/r4.jpeg')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        handleRating('r5')
                    }}>
                        <Image style={{ width: 55, height: 43 }} source={rating === 'r5' ? require('../assets/filter/rg5.jpeg') : require('../assets/filter/r5.jpeg')} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};



export default Filter;
