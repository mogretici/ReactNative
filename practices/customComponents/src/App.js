import {
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';
import Card from './components/Card';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
});

function App() {
  const [name, setName] = React.useState('Ali');
  return (
    <SafeAreaView style={styles.body}>
      <Card textheader={'Eddard Stark'} textbody={'Winter is coming..'} />
      <Card
        textheader={'Arif Işık'}
        textbody={'Uzaylılar tarafından kaçırıldım. Evet tarafından..'}
      />
      <Card
        textheader={'Serbest'}
        textbody={'İbrahim abi sen söyle, ben başka bir ilde miyim?'}
        buttontitle={'I dont know'}
      />
    </SafeAreaView>
  );
}

export default App;
