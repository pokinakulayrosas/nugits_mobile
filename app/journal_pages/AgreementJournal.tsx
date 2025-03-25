import { View, Text } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function AgreementJournal() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View className="bg-black w-screen h-48"></View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
