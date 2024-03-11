import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../HANZ/assets/hanz.png";
import { TextInput } from "react-native-paper";
function RecoveryScreen(props) {
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
      <Text style={styles.rest}>RESET PASSWORD</Text>
      <TextInput
        style={styles.passl}
        label="Email address"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        style={styles.reset}
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        SEND CODE
      </Button>
      <Text
        style={styles.back}
        onPress={() => props.navigation.navigate("Login")}
      >
        Back to Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    color: "black",
    fontSize: 12,
  },
  reset: {
    width: "50%",
    marginTop: 15,
    backgroundColor: "#436850",
  },
  logo: {
    height: 250,
    width: 250,
  },
  login: {
    width: "50%",
  },
  passl: {
    marginTop: 10,
    height: 40,
    width: "50%",
  },
  forgot: {
    color: "black",
    fontSize: 12,
    textAlign: "right",
  },
  rest: {
    color: "#12372A",
    fontSize: 28,
    fontWeight: "700",
  },
});

export default RecoveryScreen;
