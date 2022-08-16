import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

const ProductList = ({item}) => {
  console.log(item);
  return (
    <View style={{width: '50%', padding: 10}}>
      <View style={{backgroundColor: '#eceff1', borderRadius: 10, flex: 1}}>
        <View
          style={{
            height: 150,
            backgroundColor: 'white',
            justifyContent: 'center',
            margin: 10,
          }}>
          <Image
            source={{uri: item.imgURL}}
            style={{height: 100, margin: 10}}
          />
        </View>
        <View style={{margin: 5}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              paddingTop: 5,
            }}>
            {item.title}
          </Text>
          <Text style={{color: '#8c8c8c', fontWeight: 'bold'}}>
            {item.price}
          </Text>
          {!item.inStock && (
            <Text style={{color: 'red', fontWeight: 'bold'}}>STOKTA YOK</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductList;
