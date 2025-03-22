import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CustomHeader({ darkMode, toggleDarkMode }: any) {
  const router = useRouter();

  const getToday = () => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: darkMode ? "#111" : "#384484",
      }}
    >
      <TouchableOpacity
        onPress={() => router.push("/postAuth/Profile")}
        style={{ padding: 8, borderRadius: 10 }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </TouchableOpacity>


      <Text className="text-md ml-32 text-white"
      >
        {getToday()}
      </Text>

    
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Ionicons name={darkMode ? "sunny-outline" : "moon-outline"} size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Open Notifications")}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
