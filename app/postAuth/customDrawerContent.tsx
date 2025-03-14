import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function customDrawerContent(props: any) {
  const navigation = useNavigation();
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <View className="flex flex-row">
            <Image
                    source={require("../../assets/images/logo.png")}
                    className="w-[75px] h-[75px] mb-10 top-10 rounded-full"
                  />
                  <Text className="text-3xl font-semibold text-white ml-10 top-16 ">NU-GITS</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Pressable onPress={closeDrawer} className="p-20">
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
