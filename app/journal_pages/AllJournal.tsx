import { View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import SelectList from "react-native-dropdown-select-list";
import { Searchbar } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import Ripple from "react-native-material-ripple";
import { ChevronRightIcon } from "lucide-react-native";
import { router } from "expo-router";

export default function AllJournal() {
  const [selected, setSelected] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const scale = useSharedValue(1);
  const underlineWidth = useSharedValue(0);
  const translateY = useSharedValue(0);
  const iconTranslateX = useSharedValue(0);
  const opacity = useSharedValue(0.5);


  const handlePressIn = () => {
    underlineWidth.value = withTiming(1, { duration: 400 });
    translateY.value = withTiming(-2, { duration: 200 });
  };

  
  const handlePressOut = () => {
    underlineWidth.value = withTiming(0, { duration: 400 });
    translateY.value = withTiming(0, { duration: 200 });
    iconTranslateX.value = withTiming(0, { duration: 200 });
  };



  const animatedUnderlineStyle = useAnimatedStyle(() => ({
    width: `${underlineWidth.value * 100}%`,
    opacity: underlineWidth.value,
  }));

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: iconTranslateX.value }],
  }));

  useEffect(() => {
    if (selected) {
      console.log("Selected:", selected);
    }
  }, [selected]);

  const months = [
    { key: "1", value: "All" },
    { key: "2", value: "January" },
    { key: "3", value: "February" },
    { key: "4", value: "March" },
    { key: "5", value: "April" },
    { key: "6", value: "May" },
    { key: "7", value: "June" },
    { key: "8", value: "July" },
    { key: "9", value: "August" },
    { key: "10", value: "September" },
    { key: "11", value: "October" },
    { key: "12", value: "November" },
    { key: "13", value: "December" },
  ];

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        style={{
          width: 250,
          borderRadius: 10,
          height: 50,
          backgroundColor: "white",
          marginTop: 5,
          marginStart: 25,
          borderColor: "#384484",
          borderWidth: 0.5,
        }}
        inputStyle={{
          color: "#384484",
          fontSize: 14,
          fontWeight: "500",
          marginTop: -4,
        }}
      />

      <SelectList
        data={months}
        setSelected={(val) => setSelected(val)}
        placeholder="Choose a month"
        search={false}
        boxStyles={{
          borderColor: "#384484",
          backgroundColor: "white",
          borderRadius: 10,
          height: 45,
          width: 200,
          paddingHorizontal: 10,
          marginTop: 20,
          marginStart: 25,
          borderWidth: 0.5,
        }}
        dropdownStyles={{
          backgroundColor: "#fff",
          borderColor: "#384484",
          borderRadius: 8,
          width: 200,
          marginStart: 25,
        }}
        inputStyles={{
          color: "#384484",
          fontSize: 14,
        }}
        dropdownItemStyles={{
          padding: 10,
        }}
        dropdownTextStyles={{
          color: "#384484",
          fontSize: 14,
        }}
      />

      <View className="flex flex-wrap flex-row justify-center mx-auto gap-4 w-full mt-10">
        {[...Array(4)].map((_, index) => (
          <Ripple
            key={index}
            rippleColor="#374b66"
            rippleOpacity={1}
            onPress={() => console.log("Card Pressed")}
            className="w-[40%] max-w-sm"
          >
            <Card className="w-full h-48 shadow-md border border-zinc-300 bg-[#b5dce3]">
              <View className="absolute right-0 top-0 bg-[#5b87b8] w-5 h-5 rounded-se-xl transform rotate-65">
                <ChevronRightIcon
                  size={15}
                  color="white"
                  style={{ marginLeft: 3 }}
                />
              </View>
              <CardHeader>
                <CardTitle className="text-lg text-black">
                  Alex Maganda
                </CardTitle>
                <CardDescription className="text-black">
                  02/11/2002
                </CardDescription>
                <CardDescription className="text-red-600">
                  Angry
                </CardDescription>
                <CardDescription className="mt-5">
                  Ganito kasi yun
                </CardDescription>
              </CardHeader>
            </Card>
          </Ripple>
        ))}

        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => router.push("/journal_pages/AgreementJournal")}
          className="flex-2 flex-col items-center mt-24 ml-52"
        >
          <View className="flex flex-row items-center">
            <Animated.Text
              className="text-lg font-semibold text-[#384484]"
            >
              Create Journal
            </Animated.Text>
            <Animated.View style={animatedIconStyle}>
              <Feather name="arrow-right" size={20} color="#384484" style={{marginLeft:5, marginTop:3}} />
            </Animated.View>
          </View>

          <Animated.View
            style={[
              {
                height: 2,
                backgroundColor: "#384484",
                marginTop: 2,
                borderRadius: 5,
              },
              animatedUnderlineStyle,
            ]}
          />
        </Pressable>
      </View>
    </View>
  );
}
