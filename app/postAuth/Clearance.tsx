import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

import { Appbar, Divider } from "react-native-paper";
import { router } from "expo-router";

const GITHUB_AVATAR_URI = "https://github.com/mrzachnugent.png";

const Clearance = () => {
  return (
    <View className="flex-1 bg-[#F0F8FF] px-6">
      <View className="justify-center bg-white h-2/5 w-auto shadow-lg rounded-xl p-4 mb-6 mt-10">
        <View className="flex flex-column items-center gap-6 mb-1">
          <Avatar alt="Zach Nugent's Avatar" className="w-32 h-32">
            <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          </Avatar>

          <Text className="text-xl font-semibold">
            Manuzon, Alexandra Mae A.
          </Text>
          <Text className="text-sm font-medium -mt-4 text-zinc-400">
            Information Technology
          </Text>
          <Text className="text-sm font-medium -mt-5 text-zinc-400">
            2023-12345
          </Text>
          <Text className="text-sm font-medium -mt-5 text-zinc-400">
          moralessl@students.nu-moa.edu.ph
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Clearance;
