import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useEffect, useState } from 'react';
import Event from '../components/Event';

export default function EventDetailsScreen() {
  return (
    <View>
      <Text style={styles.title}>Details</Text>
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