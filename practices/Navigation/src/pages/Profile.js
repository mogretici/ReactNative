import {View, Heading, Text, Button, VStack, Center} from 'native-base';
import React from 'react';

const Profile = props => {
  const name = props.route.params.name;
  const email = props.route.params.email;
  console.log(name, email);
  return (
    <View bgColor="emerald.400">
      <View alignSelf="center" w="100%" h="100%" justifyContent="center">
        <View justifyContent="center" flexDirection="row" paddingBottom={20}>
          <Heading color="white" size="xl">
            PROFILE
          </Heading>
          <VStack space="5"></VStack>
        </View>
        <VStack
          space={10}
          justifyContent="space-around"
          tintColor="white"
          color="white">
          <Text color="white">Name: {name}</Text>
          <Text color="white">Email: {email}</Text>
          <Button
            w="20%"
            colorScheme={'rose'}
            alignSelf="flex-end"
            color="white"
            onPress={() => props.navigation.navigate('MainPage')}>
            LOGOUT
          </Button>
        </VStack>
      </View>
    </View>
  );
};

export default Profile;
