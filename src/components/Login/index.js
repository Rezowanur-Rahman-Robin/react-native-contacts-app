import React from "react";
import { Image, Text, View } from "react-native";
import Container from "../Common/Container";
import Input from "../Common/Input";
import CustomButton from "../Common/CustomButton";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/routeNames";

const LoginComponent = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image
        height={20}
        width={20}
        source={require("../../assets/images/logo.png")}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}> Welcome to RobContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            //  error={"This field is required."}
          />

          <Input
            label="Password"
            icon={<Text> Show </Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={true}
          />

          <CustomButton title="Submit" loading={false} primary />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}
            >
              <Text style={styles.linkBtn}> Register </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
