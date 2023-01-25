/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { StyleSheet } from 'react-native';
import { EventsStackParamList, ProfileStackParamList, RootStackParamList, RootTabParamList, RootTabScreenProps, YourEventsStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import EventsScreen from '../screens/EventsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import YourEventsScreen from '../screens/YourEventsScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const EventsStack = createNativeStackNavigator<EventsStackParamList>();
function EventsNavigator() {
  return (
    <EventsStack.Navigator
    initialRouteName="Events"
    screenOptions={{
      headerShown: true,
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "#003568",
      },
      headerTitleStyle: {
        color: 'white'
      }
    }}
    
    >
      <EventsStack.Screen name='Events' component={EventsScreen} options={{ title: 'Events'}}/>
      <EventsStack.Screen name='EventDetails' component={EventDetailsScreen} options={{ title: 'Event Details'}}/>
    </EventsStack.Navigator>
  );
}

const YourEventsStack = createNativeStackNavigator<YourEventsStackParamList>();
function YourEventsNavigator() {
  return (
    <YourEventsStack.Navigator
    initialRouteName="YourEvents"
    screenOptions={{
      headerShown: true,
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "#003568",
      },
      headerTitleStyle: {
        color: 'white'
      }
    }}
    
    >
      <YourEventsStack.Screen name='YourEvents' component={YourEventsScreen} options={{ title: 'Your Events'}}/>
      <YourEventsStack.Screen name='EventDetails' component={EventDetailsScreen} options={{ title: 'Event Details'}}/>
    </YourEventsStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerShown: true,
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "#003568",
      },
      headerTitleStyle: {
        color: 'white'
      }
    }}
    >
      <ProfileStack.Screen name='Profile' component={ProfileScreen} options={{ title: 'Profile'}}/>
    </ProfileStack.Navigator>
  );
  
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="EventsNavigator"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        headerShown: false
      }}>
      <BottomTab.Screen
        name="YourEventsNavigator"
        component={YourEventsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-check-o" color={color}/>
        }}
      />
      <BottomTab.Screen
        name="EventsNavigator"
        component={EventsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color}/>
        }}
      />
      
      <BottomTab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color}/>
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3, }} {...props} />;
}
