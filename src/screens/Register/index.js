import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import RegisterComponent from "../../components/SignUp";
import { validateEmail } from "../../utils/Validation";
import envs from "../../config/env";
import axiosInstance from "../../helpers/axiosInstance";
import register, { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import { LOGIN } from "../../constants/routeNames";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

function SignUp() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  const { navigate } = useNavigation();

  const { BACKEND_URL } = envs;

  // console.log("BACKEND URL:", BACKEND_URL);

  // useEffect(() => {
  //   axiosInstance.get("/contacts").catch((err) => {
  //     console.log("Error:>>>", err.response);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (data) {
  //     navigate(LOGIN);
  //   }
  // }, [data]);

  //for removing previous registration data
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error])
  );

  useEffect(() => {
    data && console.log("Success", data);
    error && console.log("Error", error);
  }, [data, error]);

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

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN, { data: response });
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
}

export default SignUp;
