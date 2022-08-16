import React from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import styles from './Card.style';

const Card = ({textheader, textbody, buttontitle}) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.textarea}>
          <Text style={styles.textheader}>{textheader || 'John Doe'}</Text>
          <Text style={styles.textbody}>
            {textbody || 'Lorem ipsum dolor sit'}
          </Text>
          <TouchableHighlight
            onPress={() => {
              Alert.alert('Merhaba ' + textheader);
            }}
            style={styles.button}>
            <Text style={styles.button_title}>
              {buttontitle || 'I LIKE THIS'}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Card;
