import {View, Text, TextInput, FlatList, ScrollView} from 'react-native';
import * as React from 'react';
import styles from './App.style';
import ProductList from './components/ProductList';
import data from './components/ProductList/products.json';

const App = () => {
  const [text, setText] = React.useState('');
  const renderItem = ({item}) => <ProductList item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>PATİKASTORE</Text>
      <ScrollView>
        <FlatList
          ListHeaderComponent={() => (
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder="🔍 Search.."
            />
          )}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={data => data.id}
        />
      </ScrollView>
    </View>
  );
};

export default App;
