import "~/global.css";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, View, StatusBar as RNStatusBar } from "react-native";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  const hasMounted = React.useRef(false);
  const [isAppReady, setIsAppReady] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) return;
  
    console.log("useIsomorphicLayoutEffect running...");
    
    if (Platform.OS === "web") {
      document.documentElement.classList.add("bg-background");
    }
  
    if (Platform.OS === "android") {
      RNStatusBar.setBackgroundColor("pink");
    }
  
    setIsAppReady(true);
    hasMounted.current = true;
  }, []);

  if (!isAppReady) return null;

  return (
    <View style={{ flex: 1 }}> 
      <StatusBar backgroundColor="#384484" translucent />
      <Stack screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" />
        <Stack.Screen name="Login" />
        <Stack.Screen name="Signup" />
        <Stack.Screen name="ForgotPassword" />
        <Stack.Screen name="ResetPassword" />
      </Stack>
    </View>
  );
}

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;
