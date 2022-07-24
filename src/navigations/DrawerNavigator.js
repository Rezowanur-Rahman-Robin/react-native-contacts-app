import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import { HOME_NAVIGATOR } from "../constants/routeNames";
import SideMenu from "./SideMenu";
import { GlobalContext } from "../context/Provider";

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  const { authDispatch } = React.useContext(GlobalContext);

  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }
    >
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
