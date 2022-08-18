import React from 'react';
import {
  Text,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Box,
} from 'native-base';
import NativeBaseIcon from './components/NativeBaseIcon';
import Head from './components/Head';
import TodoList from './components/TodoList';

const App = () => {
  const [todoList, setTodoList] = React.useState([]);
  return (
    <NativeBaseProvider
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}>
      <VStack flex={1}>
        <Head todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </VStack>
    </NativeBaseProvider>
  );
};
export default App;
