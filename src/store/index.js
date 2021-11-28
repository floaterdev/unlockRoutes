import React, { createContext, useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../router/RootNavigation";
import { useToast } from "native-base";
import * as SplashScreen from "expo-splash-screen";

var AuthContext = createContext({
  user: {},
  scheme: "",
  changeTheme: () => {},
});

export function AuthProvider(props) {
  const toast = useToast();
  const [colorMode, toggleColorMode] = useState("light");
  const [muted, setMute] = useState(true);
  const [user, setUserHook] = useState({
    logged: false,
  });
  const [setLoading] = useState(true);

  const initialLoading = useCallback(() => {
    const blockSplash = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    blockSplash();
    AsyncStorage.getItem("UNLOCK_SESSION")
      .then(async (user) => {
        await SplashScreen.hideAsync();
        if (user) {
          setUserHook({
            logged: true,
            ...JSON.parse(user),
          });
          RootNavigation.navigate("Home");
        } else {
          RootNavigation.navigate("Home");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => initialLoading(), [initialLoading]);

  const setUser = useCallback(
    async (newState) => {
      setUserHook({ ...user, ...newState });
      try {
        await AsyncStorage.setItem(
          "UNLOCK_SESSION",
          JSON.stringify({ ...user, ...newState })
        );
      } catch (e) {
        console.log(e);
      }
    },
    [user]
  );

  const storeData = useCallback(async (theme) => {
    try {
      await AsyncStorage.setItem("UNLOCK_THEME", theme);
    } catch (e) {
      console.log("erro ao salvar o theme");
    }
  }, []);

  const changeTheme = useCallback(() => {
    var themeSet = colorMode === "light" ? "dark" : "light";
    toggleColorMode(themeSet);
    storeData(themeSet);
  }, [colorMode]);

  const themeData = useCallback(async () => {
    const value = await AsyncStorage.getItem("UNLOCK_THEME");
    if (value === null) {
      toggleColorMode("light");
    } else {
      toggleColorMode(value);
    }
  }, []);

  useEffect(() => {
    themeData();
  }, [themeData]);

  const removeUser = useCallback(() => {
    AsyncStorage.removeItem("UNLOCK_SESSION")
      .then((res) => {
        toast.show({
          status: "success",
          duration: 3000,
        });
        RootNavigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
        toast.show({
          status: "success",
          duration: 3000,
        });
      });
  }, [toast]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        removeUser,
        muted: muted,
        scheme: colorMode,
        // muteVideo: () => muteVideo,
        changeTheme: changeTheme,
        setMute: () => setMute(!muted),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
