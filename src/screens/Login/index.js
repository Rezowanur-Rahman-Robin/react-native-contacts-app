import React from "react";
import { Text, View } from "react-native";
import Container from "../../components/Common/Container";
import Input from "../../components/Input";

function Login() {
  const [value, setValue] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={(text) => setValue(text)}
        value={value}
        //  error={"This field is required."}
      />

      <Input
        label="Password"
        onChangeText={(text) => setValue(text)}
        value={value}
        icon={<Text> HIDE </Text>}
        iconPosition="right"
      />
    </Container>
  );
}

export default Login;
