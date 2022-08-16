import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  headertext: {
    backgroundColor: 'white',
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});
