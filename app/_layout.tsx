import { Slot, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View } from "react-native";
import { PortalHost } from "@rn-primitives/portal"; // Import PortalHost

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    // Redirect user when they open the app
    router.replace("/postAuth/Clearance");
  }, [router]);

  return (
    <View style={{ flex: 1 }}>
      <Slot />
      {/* Add PortalHost here to be accessible in the entire app */}
      <PortalHost />
    </View>
  );
}
