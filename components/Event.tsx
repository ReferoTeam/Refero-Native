import * as WebBrowser from 'expo-web-browser';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { useNavigation } from '@react-navigation/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper'

export default function Event(props: {eventname: String, location: String, description: String}) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => {
      navigation.navigate('Root', {
        screen: 'EventsNavigator', params: {
          screen: 'EventDetails'
        }
      });
    }}>
      <Card mode='elevated' style={styles.container}>
        <Card.Title title={props.eventname} titleStyle={styles.title} subtitle={props.location} subtitleStyle={styles.subtitle}/>
        <Card.Content>
          <Paragraph>{props.description}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.button}>
          <Button icon='calendar' textColor='black' onPress={() => {

          }}>
            Join
          </Button>
        </Card.Actions>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
