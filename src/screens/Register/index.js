import React, { useState } from "react";
import { Text, View } from "react-native";
import RegisterComponent from "../../components/SignUp";
import { validateEmail } from "../../utils/Validation";

function SignUp() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== "") {
      if (name === "password") {
        if (value.length < 6) {
          setErrors((prev) => {
            return { ...prev, [name]: "Password needs at least 6 characters" };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }

      if (name === "email") {
        if (!validateEmail(value)) {
          setErrors((prev) => {
            return { ...prev, [name]: "Email is not valid" };
          });
        } else {
          setErrors((prev) => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: `This feild is required!` };
      });
    }
  };

  const onSubmit = () => {
    //validations checking here
    if (!form.userName) {
      setErrors((prev) => {
        return { ...prev, userName: "Please add a user name" };
      });
    }

    if (!form.firstName) {
      setErrors((prev) => {
        return { ...prev, firstName: "Please add a first name" };
      });
    }

    if (!form.lastName) {
      setErrors((prev) => {
        return { ...prev, lastName: "Please add a last name" };
      });
    }
    if (!form.email) {
      setErrors((prev) => {
        return { ...prev, email: "Please add a email" };
      });
    }
    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: "Please add a password" };
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
}

export default SignUp;
