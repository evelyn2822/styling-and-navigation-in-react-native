import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HANZ/Components/HomeScreen";
import LoginScreen from "../HANZ/Components/Login";
import SignupScreen from "../HANZ/Components/Signup";
import RecoveryScreen from "../HANZ/Components/Recovery";
import LandingScreen from "../HANZ/Components/Landing";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          style={styles.headhome}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFADA",
    alignItems: "center",
    justifyContent: "center",
  },
  headhome: {
    backgroundColor: "#FBFADA",
  },
});