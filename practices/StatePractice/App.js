import {View, Text, FlatList, Switch, SafeAreaView, Button} from 'react-native';
import React from 'react';

const data = [
  {id: 1, name: 'John', isFavorite: true, phone: '+1 (269) 456-2635'},
  {id: 2, name: 'Sara', isFavorite: false, phone: '+90 (132) 568-4413'},
  {id: 3, name: 'Karen', isFavorite: true, phone: '+30 (234) 852-3645'},
  {id: 4, name: 'Mark', isFavorite: false, phone: '+5 (153) 632-2436'},
  {id: 5, name: 'Paul', isFavorite: true, phone: '+2 (126) 156-8896'},
  {id: 6, name: 'Mary', isFavorite: false, phone: '+1 (233) 975-2563'},
];

function App() {
  const [switchValue, setSwitchValue] = React.useState(false);
  const [list, setList] = React.useState(data);

  const onChange = () => {
    !switchValue
      ? setList(list.filter(item => item.isFavorite === true))
      : setList(data);
  };

  return (
    <SafeAreaView>
      <Text style={{fontSize: 25}}>Favorite Contacts</Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: 10,
          flexDirection: 'row',
        }}>
        <Text style={{}}>SHOW FAVORITES</Text>
        <Switch
          style={{}}
          value={switchValue}
          onValueChange={() => setSwitchValue(!switchValue)}
          onChange={onChange}
        />
      </View>

      <FlatList
        data={list}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
            <Text>{item.name}</Text>
            <Text style={{}}>{item.phone}</Text>

            {item.isFavorite ? (
              <Text style={{color: 'green'}}> FAVORITE </Text>
            ) : (
              <Text style={{color: 'red'}}> NOT FAVORITE </Text>
            )}

            <View style={{minWidth: 100}}>
              <Button
                color={item.isFavorite ? 'red' : 'green'}
                title={item.isFavorite ? 'Remove Fav' : 'Add Fav'}
                onPress={() => {
                  item.isFavorite = !item.isFavorite;
                  setList(list.map(item => item));
                }}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default App;
