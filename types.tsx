/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  EventsNavigator: NavigatorScreenParams<EventsStackParamList> | undefined;
  YourEventsNavigator: NavigatorScreenParams<EventsStackParamList> | undefined;
  ProfileNavigator: NavigatorScreenParams<ProfileStackParamList> | undefined;
};

export type EventsStackParamList = {
  Events: undefined;
  EventDetails: undefined;
}

export type YourEventsStackParamList = {
    YourEvents: undefined;
    EventDetails: undefined;
}

export type ProfileStackParamList = {
  Profile: undefined;
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type User = {
  _id: String,
  firstName: String,
  lastName: String,
  email: String,
  description: String,
  interests: [String],
}

export type Event = {
  _id: String,
  eventname: String,
  description: String,
  location: String,
  datetime: Date,
  duration: Number,
  userEmail: String,
  eventInterests: String[],
  attendingUsers: String[]
}