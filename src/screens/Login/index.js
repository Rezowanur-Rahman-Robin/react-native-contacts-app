import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import LoginComponent from "../../components/Login";
import loginUser from "../../context/actions/auth/loginUser";
import { GlobalContext } from "../../context/Provider";

function Login() {
  const [form, setForm] = React.useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);

  const { navigate } = useNavigation();
  const { params } = useRoute();

  React.useEffect(() => {
    if (params?.data) {
      //console.log("Params:", params);
      setJustSignedUp(true);
      setForm({ ...form, userName: params.data.username });
    }
  }, [params]);

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
    setJustSignedUp(false);
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
}

export default Login;
