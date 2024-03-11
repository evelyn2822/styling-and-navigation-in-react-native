import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import logo from "../../HANZ/assets/hanz.png";

function SignupScreen(props) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
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
      <Text style={styles.create}>CREATE ACCOUNT</Text>
      <TextInput
        style={styles.username}
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.email}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.password}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true} // Hide password
      />
      <Button
        style={styles.signup}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        SIGNUP
      </Button>
      <Text>
        Already have an account?
        <Text
          style={{ color: "black" }}
          onPress={() => props.navigation.navigate("Login")}
        >
          Login.
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 250,
    width: 250,
  },
  signup: {
    marginTop: 10,
    width: "50%",
    backgroundColor: "#436850",
    height: 40,
  },
  password: {
    marginTop: 10,
    height: 40,
    width: "50%",
  },
  email: {
    height: 40,
    width: "50%",
  },
  username: {
    marginBottom: 10,
    height: 40,
    width: "50%",
  },
  create: {
    color: "#12372A",
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
  },
});

export default SignupScreen;
