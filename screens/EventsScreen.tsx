import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';

export default function EventsScreen() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] =  useState(true);

  const getEvents = async () => {
    const res = await fetch('http://localhost:8000/events');
    const data = await res.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events Screen</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.eventname}</Text>}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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