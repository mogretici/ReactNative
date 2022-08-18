import React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  Box,
  Pressable,
  CloseIcon,
  IconButton,
  Center,
} from 'native-base';

const TodoList = ({todoList, setTodoList}) => {
  const handleDelete = id => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };
  const handleRemoveAll = () => {
    setTodoList([]);
  };
  const handlePress = item => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === item.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      }),
    );
  };
  const [unDoneCount, setUnDoneCount] = React.useState(0);
  React.useEffect(() => {
    setUnDoneCount(todoList.filter(todo => !todo.isDone).length);
  }, [todoList]);
  return (
    <View
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.100'}}
      minH="100%">
      {unDoneCount === 0 ? (
        <Center height={200}>
          <Text fontSize={25}>Is there really nothing to do?</Text>
        </Center>
      ) : (
        <Box justifyContent="flex-end" flexDirection="row" paddingRight={3}>
          <Text fontSize={20}>
            {unDoneCount}
            {unDoneCount === 1 ? ' item' : ' items'} left
          </Text>
        </Box>
      )}

      <View>
        <FlatList
          ListFooterComponent={() => (
            <Box flexDirection="row" justifyContent="flex-end" margin={2}>
              {todoList.length > 1 && (
                <Button onPress={handleRemoveAll}> REMOVE ALL </Button>
              )}
            </Box>
          )}
          maxH={600}
          paddingTop={2}
          data={todoList}
          scrollToOverflowEnabled
          renderItem={({item}) => (
            <Pressable
              margin={2}
              _dark={{bg: 'blueGray.900'}}
              _light={{bg: 'blueGray.50'}}
              onPress={() => handlePress(item)}
              rounded="8"
              borderWidth="1"
              borderColor="coolGray.300"
              maxW="96"
              shadow="3"
              bg="coolGray.100"
              p="5"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <Text
                w="70%"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                textDecorationLine={item.isDone ? 'line-through' : 'none'}
                bold
                fontSize={25}>
                {item.title}
              </Text>
              <IconButton
                w="10%"
                colorScheme="red"
                icon={<CloseIcon />}
                onPress={() => handleDelete(item.id)}>
                REMOVE
              </IconButton>
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default TodoList;
