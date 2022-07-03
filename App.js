import { StyleSheet, Text, View } from "react-native";
import AppNavContainer from "./src/navigations";
import "react-native-gesture-handler";
import GlobalProvider from "./src/context/Provider";

export default function App() {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
}
