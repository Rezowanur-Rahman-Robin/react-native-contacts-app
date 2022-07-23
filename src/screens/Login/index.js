import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import LoginComponent from "../../components/Login";
import loginUser from "../../context/actions/auth/loginUser";
import { GlobalContext } from "../../context/Provider";

function Login() {
  const [form, setForm] = React.useState({});
  const { navigate } = useNavigation();

  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  );
}

export default Login;
