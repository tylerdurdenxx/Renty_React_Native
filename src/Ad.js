// AdCarousel.js
import React, { useEffect, useRef } from 'react';
import { View, Image, Dimensions, StyleSheet, FlatList } from 'react-native';

const { width } = Dimensions.get('window');

const AdCarousel = ({ ads }) => {
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current && !isNaN(flatListRef.current.index)) {
        flatListRef.current.scrollToIndex({
          index: (flatListRef.current.index + 1) % ads.length,
          animated: true,
        });
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [ads.length]);
  
  const renderItem = ({ item }) => (
    <Image source={item.image} style={styles.adImage} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={ads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  adImage: {
    width: 340,
    height: 200,
    resizeMode: 'cover',
  },
});

export default AdCarousel;
