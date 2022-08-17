import {
  Switch,
  useColorMode,
  HStack,
  Text,
  SunIcon,
  MoonIcon,
} from 'native-base';
import React from 'react';

const ToggleDarkMode = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <MoonIcon />
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <SunIcon />
    </HStack>
  );
};

export default ToggleDarkMode;
