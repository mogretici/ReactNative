import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);

  async function fetchData() {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setLoading(false);
    setData(res.data);
  }
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      {loading ? (
        <View>
          <Text>Fetching Data</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default App;
