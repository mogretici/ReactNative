import {View, Text, Input, Button} from 'native-base';
import React from 'react';
import ToggleDarkMode from '../colorMode';

const Head = ({todoList, setTodoList}) => {
  const [text, setText] = React.useState('');
  const handleChange = todo => setText(todo);
  const [count, setCount] = React.useState(1);

  const handleSubmit = () => {
    if (text.length > 0) {
      setTodoList([
        ...todoList,
        {
          id: count,
          title: text[0].toUpperCase() + text.substring(1),
          isDone: false,
        },
      ]);
      setCount(count + 1);
      setText('');
    }
  };
  return (
    <View _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}}>
      <View
        justifyContent="space-between"
        flexDirection="row"
        paddingBottom={3}
        paddingTop={3}
        margin={3}>
        <Text fontSize="2xl" letterSpacing={4} fontWeight="bold" paddingTop={2}>
          TODO APP
        </Text>
        <ToggleDarkMode />
      </View>
      <View flexDirection="row" margin={3}>
        <Input
          value={text}
          w={'80%'}
          onChangeText={handleChange}
          fontSize="lg"
          placeholder="What are you going to do?"
        />
        <Button w={'20%'} fontSize="lg" onPress={handleSubmit}>
          ADD
        </Button>
      </View>
    </View>
  );
};

export default Head;
