import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function EventsScreen() {

  const data = [
    {key: 'Test1'},
    {key: 'Test2'}
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events Screen</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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