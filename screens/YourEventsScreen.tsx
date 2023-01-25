import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
import Event from '../components/Event';
import { ActivityIndicator } from 'react-native-paper';
import { Event as EventType } from '../types';

export default function EventsScreen() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [refreshing, setRefreshing] = useState(true);

  const fetchEvents = async () => {
    fetch('http://localhost:8000/events/attending/cole.carlson@stthomas.edu')
    .then((res: Response) => res.json())
    .then((events: any) => {
      setEvents(events);
      setRefreshing(false);
    })
    .catch((err: Error) => console.log(err));
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      {refreshing ? <ActivityIndicator/> : null}
      <FlatList
        data={events}
        refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={fetchEvents} /> }
        renderItem={({item}) => <Event event={item} onJoin={fetchEvents}></Event>}
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