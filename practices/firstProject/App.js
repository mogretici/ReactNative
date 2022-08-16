import React, {useState} from 'react';
import {Text, View, Button, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  countContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingTop: 10,
  },
  body: {
    backgroundColor: 'aliceblue',
  },
});

function App() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.countContainer}>
        <Text style={{fontSize: 20, color: 'blue'}}>Count: {count}</Text>
        <View style={styles.buttonGroup}>
          <Button
            title="decrease"
            onPress={() => setCount(count - 1)}
            color="red"
            disabled={count === 0}
          />
          <Button
            title="increase"
            color="green"
            onPress={() => setCount(count + 1)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
