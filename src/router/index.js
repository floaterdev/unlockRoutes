import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import AuthContext from "../store/";
import { useNavigation, useRoute } from "@react-navigation/core";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { defaultStyles } from "../globalStyles";
import { navigationRef } from "./RootNavigation";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Button, Icon } from "native-base";

import ProfileScreen from "../pages/Profile";
import HomeScreen from "../pages/Home";
import Menu from "../pages/Menu";
import Hint from "../pages/Hint";
import Login from "../pages/Login";

const DarkThemeContext = {
  ...DarkTheme,
  dark: true,
  colors: {
    borderBottom: "#000",
    text: "#eeeeee",
    background: "#212121",
    primary: { color: "#eeeeee" },
    secundary: { color: "#6E6E6E" },
  },
  background: {
    main: { backgroundColor: "#212121" },
    gray: { backgroundColor: "#2d2c2c" },
  },
};

const DefaultThemeContext = {
  ...DefaultTheme,
  dark: false,
  colors: {
    borderBottom: "#bdbdbd",
    background: "#ffffff",
    text: "#121212",
    primary: { color: "#121212" },
    secundary: { color: "#525252" },
  },
  background: {
    main: { backgroundColor: "#ffffff" },
    gray: { backgroundColor: "#f4f4f5" },
  },
};

export default function Navigation() {
  const linking = {
    prefixes: [Linking.createURL("/"), "https://app.unlockroutes.com"],
    config: {
      screens: {
        Reset: "reset/:token",
      },
    },
  };

  const context = useContext(AuthContext);
  const Stack = createNativeStackNavigator();
  const theme =
    context.scheme === "dark" ? DarkThemeContext : DefaultThemeContext;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer
        linking={linking}
        theme={
          context.scheme === "dark" ? DarkThemeContext : DefaultThemeContext
        }
        style={theme?.background.main}
        ref={navigationRef}
      >
        <StatusBar
          backgroundColor={"#121212"}
          barStyle={context.scheme === "light" ? "" : "light-content"}
        />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            animation: "slide_from_right",
          }}
        >
          {/* ROTAS NÃO-AUTENTICADAS */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={FeedTabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const FeedTabs = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const context = useContext(AuthContext);
  return (
    <Tab.Navigator
      theme={context.scheme === "dark" ? DarkThemeContext : DefaultTheme}
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        tabBarLabelStyle: {
          display: "none",
        },
        tabBarActiveTintColor: defaultStyles.lightDark,
        tabBarInactiveTintColor:
          context.scheme === "dark" ? "#eeeeee" : "#121212",
        tabBarStyle: {
          height: 60,
          ...theme?.background.main,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons
                name="home-sharp"
                size={28}
                color={context.scheme === "light" ? "#212121" : "#eeeeee"}
              />
            ) : (
              <Ionicons
                name="home-outline"
                size={28}
                color={context.scheme === "light" ? "#212121" : "#eeeeee"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesome
                name="user"
                size={29}
                color={context.scheme === "light" ? "#212121" : "#eeeeee"}
              />
            ) : (
              <FontAwesome
                name="user-o"
                size={24}
                color={context.scheme === "light" ? "#212121" : "#eeeeee"}
              />
            );
          },
          tabBarVisible: false,
        }}
      />

      {/* <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Ionicons
                name="ios-home"
                size={28}
                style={{
                  color: context.scheme === "light"
                    ? "#212121"
                    : "#eeeeee",
                }}
              />
            );
          },
        }}
      /> */}

      <Tab.Screen
        name="Hint"
        component={Hint}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons
                name="bulb"
                size={28}
                color={context.scheme === "light" ? "#212121" : "#eeeeee"}
              />
            ) : (
              <Ionicons
                name="bulb-outline"
                size={28}
                color={context.scheme === "light" ? "#212121" : "#eeeeee"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const BackButton = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  return (
    <TouchableOpacity
      onPress={() =>
        route.params && route.params.previous_screen
          ? navigation.navigate(
              route.params.previous_screen.name,
              route.params.previous_screen.params
                ? route.params.previous_screen.params
                : {}
            )
          : navigation.goBack("")
      }
    >
      <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
        <Entypo
          name="chevron-small-left"
          size={30}
          color={theme?.colors?.primary.color}
        />
      </View>
    </TouchableOpacity>
  );
};
