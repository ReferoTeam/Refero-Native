import * as WebBrowser from 'expo-web-browser';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { useNavigation } from '@react-navigation/native';
import { Card, Title, Paragraph, Button, Dialog } from 'react-native-paper'
import { useUserContext } from '../contexts/UserContext';
import { User } from '../types';
import { useEffect, useState } from 'react';
import { Event as EventType } from '../types';

export default function Event({event, onJoin}: {event: EventType, onJoin: any}) {
  const navigation = useNavigation();
  const joined: Boolean = event.attendingUsers.includes('cole.carlson@stthomas.edu');
  const userData: User = {
    _id: '',
    email: 'cole.carlson@stthomas.edu',
    firstName: 'Cole',
    lastName: 'Carlson',
    description: '',
    interests: ['']
  };

  function joinEvent() {
    let url = 'http:localhost:8000/events/'
    if(joined) {
      url += 'removeUser/' + event._id;
    } else {
      url += 'addUser/' + event._id;
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }
    fetch(url, requestOptions)
    .then((res: Response) => {
      onJoin();
    })
    .catch((err: Error) => {
      console.log(err);
    });

  }

  function navigateToDetails() {
    if(!joined) {
      navigation.navigate('Root', {
        screen: 'EventsNavigator',
        params: {
          screen: 'EventDetails'
        }
      });
    } else {
      navigation.navigate('Root', {
        screen: 'YourEventsNavigator',
        params: {
          screen: 'EventDetails'
        }
      });
    }
  }

  return (
    <Pressable onPress={navigateToDetails}>
      <Card mode='elevated' style={styles.container}>
        <Card.Title title={event.eventname} titleStyle={styles.title} subtitle={event.location} subtitleStyle={styles.subtitle}/>
        <Card.Content>
          <Paragraph>{event.description}</Paragraph>
          <Paragraph>{event._id}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.button}>
          <Button icon='calendar' textColor='black' onPress={joinEvent} buttonColor={ joined ? styles.joined.color : 'white'}>
            { joined ? 'Joined' : 'Join'}
          </Button>
        </Card.Actions>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  joined: {
    color: '#90EE90'
  },
  text: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  container: {
    marginTop: 10,
    marginHorizontal: 5,
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  button: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: 'white'
  },
  title: {
    fontWeight: 'bold'
  },
  subtitle: {
    fontWeight: '200',
  }
});
