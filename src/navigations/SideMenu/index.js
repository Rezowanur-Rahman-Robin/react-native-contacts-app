import { View, Text, SafeAreaView, Image, Alert } from "react-native";
import React from "react";
import Container from "../../components/Common/Container";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LOGOUT, SETTINGS } from "../../constants/routeNames";

const SideMenu = ({ navigation }) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert("Logout!", "Are you sure to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {},
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: "Settings",
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>O</Text>,
      name: "Logout",
      onPress: () => {
        handleLogout();
      },
    },
    {
      icon: <Text>A</Text>,
      name: "Azim",
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          height={20}
          width={20}
          source={require("../../assets/images/logo.png")}
          style={styles.logoImage}
        />

        <View style={{ paddingHorizontal: 70 }}>
          {menuItems.map(({ name, icon, onPress }) => (
            <TouchableOpacity
              key={name}
              style={styles.navItem}
              onPress={onPress}
            >
              {icon}

              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
