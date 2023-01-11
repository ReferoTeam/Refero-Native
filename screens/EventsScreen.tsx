import { FlatList, RefreshControl, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
import Event from '../components/Event';
import { ActivityIndicator } from 'react-native-paper';

export default function EventsScreen() {
  const [data, setData] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(true);

  const fetchEvents = async () => {
    
    const res: Response = await fetch('http://localhost:8000/events');
    const newData = await res.json();
    setData(newData);
    setRefreshing(false);
    // fetch('http://localhost:8000/events')
    //   .then((res: Response) => res.json())
    //   .then((resJson) => {
    //     setRefreshing(false);
    //     var newData = data.concat(resJson.results);
    //     setData(newData);
    //   })
    //   .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      {refreshing ? <ActivityIndicator/> : null}
      <FlatList
        data={data}
        refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={fetchEvents} /> }
        renderItem={({item}) => <Event eventname={item.eventname} location={item.location} description={item.description}></Event>}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    marginVertical: 20,
    fontSize: 20
  }
});