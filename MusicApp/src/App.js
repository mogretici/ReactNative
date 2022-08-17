import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Box,
  View,
  Container,
  Input,
  ScrollView,
} from 'native-base';
import NativeBaseIcon from './components/NativeBaseIcon';
import ToggleDarkMode from './components/colorMode';
import CardView from './components/CardView/CardView';
import data from './components/CardView/music-data.json';

const App = () => {
  const [value, setValue] = React.useState('');

  const [list, setList] = React.useState(data);

  const handleChange = text => {
    setValue(text);
    text === ''
      ? setList(data)
      : setList(
          data.filter(item => {
            return (
              item.title.toLowerCase().includes(text) ||
              item.artist.toLowerCase().includes(text)
            );
          }),
        );
  };

  return (
    <NativeBaseProvider
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}>
      <HStack
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        justifyContent="space-between"
        alignItems="center">
        <HStack justifyContent="space-between" alignItems="center">
          <NativeBaseIcon />
          <Text style={{fontSize: 20}}>MUSIC APP</Text>
        </HStack>

        <ToggleDarkMode />
      </HStack>
      <HStack
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        style={{paddingTop: 10}}>
        <Box alignItems="center" w="100%" justifyContent="flex-end">
          <Input
            minW="100%"
            value={value}
            onChangeText={handleChange}
            placeholder="Search.."
          />
        </Box>
      </HStack>
      <ScrollView
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        h="80"
        _contentContainerStyle={{
          px: '20px',
          mb: '4',
          minW: '72',
        }}>
        <VStack alignItems="center">
          <CardView data={list} />
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};
export default App;
