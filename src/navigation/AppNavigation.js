import React from "react";
import { Text } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import WelcomScreen from "../components/WelcomScreen";
import LoginScreen from "../components/LoginScreen";
import SignupScreen from "../components/SignupScreen";
import ItemList from "../components/ItemList";
import Screen2 from "../components/Screen2";
import Screen3 from "../components/Screen3";
import DrawerContainer from '../components/DrawerContainer'

// drawer stack
const DrawerStack = DrawerNavigator(
  {
    ItemList: { screen: ItemList },
    screen2: { screen: Screen2 },
    screen3: { screen: Screen3 }
  },
  {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  }
);

const drawerButton = navigation => (
  <Text
    style={{ padding: 5, color: "white" }}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate("DrawerOpen");
      } else {
        navigation.navigate("DrawerClose");
      }
    }}
  >
    Menu
  </Text>
);

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "green" },
      title: "Item List",
      headerTintColor: "white",
      gesturesEnabled: false,
      headerLeft: drawerButton(navigation)
    })
  }
);

// login stack
const LoginStack = StackNavigator(
  {
    welcomeScreen: { screen: WelcomScreen },
    loginScreen: { screen: LoginScreen, navigationOptions: { title: "Login" } },
    signupScreen: {
      screen: SignupScreen,
      navigationOptions: { title: "Signup" }
    }
  },
  {
    headerMode: "float",
    navigationOptions: {
      headerStyle: { backgroundColor: "red" },
      title: "WelCome to My App",
      headerTintColor: 'white'
    }
  }
);

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
  },
  {
    // Default config for all screens
    headerMode: "none",
    title: "Main",
    initialRouteName: "loginStack"
    
  }                 
);

export default PrimaryNav;
