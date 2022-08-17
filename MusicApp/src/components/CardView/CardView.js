import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  VStack,
  NativeBaseProvider,
  Avatar,
  Badge,
} from 'native-base';
import React from 'react';

const CardView = ({data}) => {
  return data.map(item => {
    return (
      <Box
        key={item.id}
        style={{justifyContent: 'flex-start', width: '100%', paddingTop: 10}}>
        <HStack style={{alignItems: 'center'}}>
          <Avatar
            size="2xl"
            source={{
              uri: item.imageUrl,
            }}
          />
          <VStack style={{paddingLeft: 20}}>
            <Heading style={{maxWidth: 200}}>{item.title}</Heading>
            <HStack w={210} style={{justifyContent: 'space-between'}}>
              <Text>
                {item.artist} <Text color="grey">{item.year}</Text>
              </Text>

              {item.isSoldOut && (
                <Badge
                  style={{size: 20}}
                  variant="outline"
                  colorScheme="error"
                  alignSelf="center">
                  SOLD OUT
                </Badge>
              )}
            </HStack>
          </VStack>
        </HStack>
      </Box>
    );
  });
};

export default CardView;
