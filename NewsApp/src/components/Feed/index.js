import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import data from './news_data.json';
import {Card, Title, Paragraph} from 'react-native-paper';

const CardView = ({news}) => {
  return (
    <Card>
      <Card.Cover source={{uri: news.imageUrl}} />
      <Card.Content>
        <Title>{news.title}</Title>
        <Paragraph>{news.description}</Paragraph>
      </Card.Content>
    </Card>
  );
};
const Feed = () => {
  return (
    <View>
      {data.map((news, index) => {
        return <CardView news={news} key={index} />;
      })}
    </View>
  );
};

export default Feed;
