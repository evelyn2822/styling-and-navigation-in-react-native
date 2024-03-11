import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "./../assets/hanz.png";
import { TextInput } from "react-native-paper";
function LandingScreen(props) {
  console.log(props);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FBFADA",
      }}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.grt}>Han'z Foodie Corner is a great place for food lovers to get a good taste of food, affordable</Text>
      <Text style={styles.grt}> and tasty, and deliver it to their doorstep with a happy face and love.</Text>
      <Button
        style={styles.logout}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        LOGOUT
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 250,
    width: 250,
  },
  login: {
    marginTop: 10,
    width: "50%",
  },
  passl: {
    marginTop: 10,
  },
  forgot: {
    color: "black",
    fontSize: 10,
    textAlign: "right",
  },
  grt: {
    color: "#12372A",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 5,
  },
  logout: {
    width: "50%",
    marginTop: 10,
    backgroundColor: "#436850",
  },
});

export default LandingScreen;