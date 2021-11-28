import React, { useEffect } from "react";
import { AuthProvider } from "./src/store";
import { NativeBaseProvider } from "native-base";
import Navigation from "./src/router";
import * as SplashScreen from "expo-splash-screen";
import { SSRProvider } from "@react-aria/ssr";

console.reportErrorsAsExceptions = false;

const App = () => {
  useEffect(() => {
    async function blockSplash() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }

    blockSplash();
  }, []);

  return (
    <SSRProvider>
      <AuthProvider>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </AuthProvider>
    </SSRProvider>
  );
};

export default App;
