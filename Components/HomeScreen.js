import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import logo from "../../HANZ/assets/hanz.png";

function HomeScreen(props) {
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
        <Text style={styles.team}>HAN'Z FOODIE CORNER</Text>
        <Text style={styles.tag}>Your FOODIELicious partner!</Text>
        <Button
          style={styles.login}
          icon="login"
          mode="contained"
          onPress={() => props.navigation.navigate("Login")}
        >
          LOGIN
        </Button>
        <Button
          style={styles.signup}
          icon="login"
          mode="contained"
          onPress={() => props.navigation.navigate("Signup")}
        >
          SIGNUP
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
      backgroundColor: "#436850",
    },
    signup: {
      width: "50%",
      marginTop: 10,
      backgroundColor: "#436850",
    },
    team: {
      color: "#12372A",
      fontSize: 30,
      fontWeight: "700",
      marginRight: 3,
    },
    tag: {
      color: "black",
      fontSize: 15,
      fontWeight: "600",
      marginBottom: 10,
      fontStyle: "italic",
    },
  });
  
  export default HomeScreen;