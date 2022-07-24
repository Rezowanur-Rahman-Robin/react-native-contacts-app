import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  logoImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginTop: 50,
  },
  navItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 17,
    paddingVertical: 7,
    paddingLeft: 20,
  },
});
