import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    paddingTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    maxHeight: 150,
    minWidth: 300,
    maxWidth: 300,
    borderRadius: 15,
    paddingTop: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00c2ff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textarea: {
    flex: 2,
  },
  textheader: {
    flex: 1,
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 20,
  },
  textbody: {
    flex: 1,
    color: 'black',
    paddingHorizontal: 20,
  },
  button_title: {
    fontWeight: 'bold',
    color: 'white',
  },
});
