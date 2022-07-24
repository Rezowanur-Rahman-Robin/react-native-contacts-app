import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, Text } from "react-native";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNavContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [authLoaded, setAuthLoaded] = React.useState(false); //surute login screen eshe then contact screen e jasse..eita thik korar jonno eita use hoise.

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");

      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);
      }
    } catch (error) {}
  };

  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  useEffect(() => {
    getUser();
    //console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isLoggedIn || isAuthenticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
