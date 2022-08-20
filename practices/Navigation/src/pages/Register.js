import {View, Input, Button, Heading, VStack, FormControl} from 'native-base';
import {Alert} from 'react-native';
import React from 'react';

const Register = props => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = () => {
    if (
      password != confirmPassword ||
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      Alert.alert('ERROR', 'INCORRECT INFORMATION !');
    } else {
      props.navigation.navigate('ProfilePage', {name: name, email: email});
      Alert.alert('SUCCESS', 'Registered Successfully');
    }
  };
  return (
    <View bgColor="emerald.400">
      <View alignSelf="center" w="80%" h="100%" justifyContent="center">
        <View justifyContent="center" flexDirection="row" paddingBottom={20}>
          <Heading color="white" size="xl">
            REGISTER
          </Heading>
        </View>

        <VStack
          space={5}
          justifyContent="space-around"
          tintColor="white"
          color="white">
          <FormControl mb="5" htmlFor="Name">
            <Input
              value={name}
              onChangeText={setName}
              outlineColor="white"
              color="white"
              placeholderTextColor="white"
              borderColor="white"
              selectionColor="white"
              focusOutlineColor="white"
              placeholder="Name"
            />
          </FormControl>
          <FormControl mb="5" nativeID="Email">
            <Input
              value={email}
              onChangeText={setEmail}
              outlineColor="white"
              color="white"
              placeholderTextColor="white"
              borderColor="white"
              selectionColor="white"
              focusOutlineColor="white"
              placeholder="Email"
            />
          </FormControl>
          <FormControl mb="5">
            <Input
              value={password}
              onChangeText={setPassword}
              outlineColor="white"
              color="white"
              placeholderTextColor="white"
              borderColor="white"
              selectionColor="white"
              focusOutlineColor="white"
              placeholder="Password"
            />
          </FormControl>
          <FormControl mb="5">
            <Input
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              outlineColor="white"
              color="white"
              placeholderTextColor="white"
              borderColor="white"
              selectionColor="white"
              focusOutlineColor="white"
              placeholder="Password Confirm"
            />
          </FormControl>
          <View justifyContent="flex-end" flexDirection="row">
            <Button
              w="50%"
              colorScheme={'green'}
              title="COMPLETE"
              onPress={handleSubmit}>
              COMPLETE
            </Button>
          </View>
        </VStack>
      </View>
    </View>
  );
};

export default Register;
