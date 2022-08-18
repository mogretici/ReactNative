import {useColorMode, HStack, SunIcon, MoonIcon, IconButton} from 'native-base';
import React from 'react';

const ToggleDarkMode = () => {
  const {colorMode, toggleColorMode} = useColorMode('dark');
  return (
    <HStack space={2} alignItems="center">
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        borderRadius="full"
        _icon={{
          color: colorMode === 'light' ? 'blueGray.900' : 'blueGray.50',
          size: 'md',
        }}
        onPress={() => toggleColorMode()}
      />
    </HStack>
  );
};

export default ToggleDarkMode;
