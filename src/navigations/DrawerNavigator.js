import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import { HOME_NAVIGATOR } from "../constants/routeNames";

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
