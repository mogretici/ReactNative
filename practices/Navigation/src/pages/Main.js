import {Center, Text, Button, Heading} from 'native-base';
import React from 'react';

const Main = props => {
  return (
    <Center h="100%" bgColor="emerald.400" justifyContent="space-around">
      <Heading color="white" size="3xl">
        FITNESS APP
      </Heading>
      <Button
        colorScheme={'green'}
        onPress={() => props.navigation.navigate('RegisterPage')}>
        REGISTER NOW
      </Button>
    </Center>
  );
};

export default Main;
