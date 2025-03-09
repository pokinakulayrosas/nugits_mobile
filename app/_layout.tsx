import "~/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, View, StatusBar as RNStatusBar } from "react-native";
import { PortalHost } from "@rn-primitives/portal";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  const hasMounted = React.useRef(false);
  const [isAppReady, setIsAppReady] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) return;

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
      <Stack screenOptions={{ headerShown: false }} initialRouteName="preAuth/Login">
        <Stack.Screen name="/preAuth/Login" />
      </Stack>
      {/* <PortalHost /> */}
    </View>
  );
}

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;
