import React from "react";
import { Image, Text, View } from "react-native";
import Container from "../Common/Container";
import Input from "../Common/Input";
import CustomButton from "../Common/CustomButton";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/routeNames";
import Message from "../Common/Message";

const LoginComponent = ({ error, onChange, loading, onSubmit }) => {
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
          {error && !error.error && (
            <Message
              // retry
              //retryFn={() => console.log("Retrying...")}
              onDismiss={() => {}}
              danger
              message="Invalid credentials"
            />
          )}
          {error?.error && <Message danger onDismiss message={error?.error} />}

          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={(value) => {
              onChange({ name: "userName", value });
            }}
          />

          <Input
            label="Password"
            icon={<Text> Show </Text>}
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />

          <CustomButton
            onPress={onSubmit}
            title="Submit"
            loading={loading}
            disabled={loading}
            primary
          />

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
