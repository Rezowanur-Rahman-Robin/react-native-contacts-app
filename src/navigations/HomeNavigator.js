import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from "../constants/routeNames";
import Contacts from "../screens/Contacts";
import CreateContact from "../screens/CreateContact";
import ContactDetails from "../screens/ContactDetails";
import Settings from "../screens/Settings";

function HomeNavigator() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={CONTACT_LIST}
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}
      ></HomeStack.Screen>

      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetails}
      ></HomeStack.Screen>

      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}
      ></HomeStack.Screen>

      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
