import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import Container from "../Common/Container";
import Input from "../Common/Input";
import CustomButton from "../Common/CustomButton";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN, REGISTER } from "../../constants/routeNames";
import Message from "../Common/Message";

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  error,
  loading,
}) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

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
          {error?.error && (
            <Message retry danger retryFn={onSubmit} message={error?.error} />
          )}
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={(value) => {
              onChange({ name: "userName", value });
            }}
            error={errors.userName || error?.username?.[0]}
          />

          <Input
            label="First name"
            placeholder="Enter First name"
            onChangeText={(value) => {
              onChange({ name: "firstName", value });
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Last name"
            placeholder="Enter Last name"
            onChangeText={(value) => {
              onChange({ name: "lastName", value });
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />

          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
            error={errors.email || error?.email?.[0]}
          />

          <Input
            label="Password"
            icon={
              <TouchableOpacity
                onPress={() => setIsSecureEntry((prev) => !prev)}
              >
                <Text> {isSecureEntry ? "Show" : "Hide"} </Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
            error={errors.password || error?.password?.[0]}
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
