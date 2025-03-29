import { Slot, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View } from "react-native";
import { PortalHost } from "@rn-primitives/portal"; 

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    // PALITAN MO YUNG ROUTE PAG GUSTO
    router.replace("/journal_pages/AgreementJournal");
  }, [router]);

  return (
    <View style={{ flex: 1 }}>
      <Slot />
      {/* Add PortalHost here to be accessible in the entire app */}
      <PortalHost />
    </View>
  );
}
