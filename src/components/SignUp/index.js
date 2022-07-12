import React from "react";
import { Image, Text, View } from "react-native";
import Container from "../Common/Container";
import Input from "../Common/Input";
import CustomButton from "../Common/CustomButton";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN, REGISTER } from "../../constants/routeNames";

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  error,
  loading,
}) => {
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
        <Text style={styles.subTitle}>Create an Account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={(value) => {
              onChange({ name: "userName", value });
            }}
            error={errors.userName}
          />

          <Input
            label="First name"
            placeholder="Enter First name"
            onChangeText={(value) => {
              onChange({ name: "firstName", value });
            }}
            error={errors.firstName}
          />

          <Input
            label="Last name"
            placeholder="Enter Last name"
            onChangeText={(value) => {
              onChange({ name: "lastName", value });
            }}
            error={errors.lastName}
          />

          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
            error={errors.email}
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
            error={errors.password}
          />

          <CustomButton
            onPress={onSubmit}
            title="Sign up"
            loading={loading}
            disabled={loading}
            primary
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}
            >
              <Text style={styles.linkBtn}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
