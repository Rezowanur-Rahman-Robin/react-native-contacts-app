import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/Common/Container";

function Contacts() {
  const { setOptions, toggleDrawer } = useNavigation();
  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}
        >
          <Text style={{ padding: 10 }}>Nav</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>Hi From Contacts...</Text>
    </Container>
  );
}

export default Contacts;
