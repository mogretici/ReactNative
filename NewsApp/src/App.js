import {SafeAreaView, Text, ScrollView, Image, View} from 'react-native';
import React from 'react';
import styles from './App.style.js';
import Feed from './components/Feed';
import data from './components/Feed/news_data.json';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headertext}>News</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(bannerNews => (
          <View key={bannerNews.u_id}>
            <Image
              style={styles.banner_image}
              source={{uri: bannerNews.imageUrl}}
            />
            <Text style={styles.banner_image}>{bannerNews.title}</Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView>
        <Feed />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
