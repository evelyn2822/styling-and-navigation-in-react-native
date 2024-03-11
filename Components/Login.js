import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import logo from "../../HANZ/assets/hanz.png";

function LoginScreen(props) {
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
      <Text style={styles.greet}>Your FOODIELicious partner!</Text>
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
      <Text
        style={styles.forgot}
        onPress={() => props.navigation.navigate("Recovery")}
      >
        Forgot Password?
      </Text>
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Landing")}
      >
        LOGIN
      </Button>
      <Text>
        Don't have an account?
        <Text
          style={{ color: "black" }}
          onPress={() => props.navigation.navigate("Signup")}
        >
          Signup.
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
  login: {
    marginTop: 10,
    width: "50%",
    backgroundColor: "#436850",
  },
  password: {
    marginTop: 10,
    height: 40,
    width: "50%",
  },
  forgot: {
    color: "black",
    fontSize: 12,
    textAlign: "right",
  },
  greet: {
    color: "#12372A",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    fontStyle: "italic",
  },
  email: {
    height: 40,
    width: "50%",
  },
});

export default LoginScreen;
