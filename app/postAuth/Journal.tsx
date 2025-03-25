import { View, ScrollView, Dimensions, Text } from "react-native";
import React from "react";
import AppleInvites from "../journal_pages/AppleInvites";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import JournalInstruction from "../journal_pages/JournalInstruction";
import AllJournal from "../journal_pages/AllJournal";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export default function YourComponent() {
  const opacityIndicator = useSharedValue(1);
  const opacityApple = useSharedValue(1);

  const opacityJournal = useSharedValue(0);
  const translateYJournal = useSharedValue(100);

  const opacityAllJournal = useSharedValue(0);
  const translateYAllJournal = useSharedValue(100);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY > 100) {
      opacityIndicator.value = withTiming(0, { duration: 500 });
      opacityApple.value = withTiming(0, { duration: 500 });

      opacityJournal.value = withTiming(1, { duration: 500 });
      translateYJournal.value = withTiming(0, { duration: 500 });

      opacityAllJournal.value = withTiming(1, { duration: 700 });
      translateYAllJournal.value = withTiming(0, { duration: 700 });
    } else {
      opacityIndicator.value = withTiming(1, { duration: 500 });
      opacityApple.value = withTiming(1, { duration: 500 });

      opacityJournal.value = withTiming(0, { duration: 500 });
      translateYJournal.value = withTiming(100, { duration: 500 });

      opacityAllJournal.value = withTiming(0, { duration: 500 });
      translateYAllJournal.value = withTiming(100, { duration: 500 });
    }
  };

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    opacity: opacityIndicator.value,
  }));

  const animatedAppleStyle = useAnimatedStyle(() => ({
    opacity: opacityApple.value,
  }));

  const animatedJournalStyle = useAnimatedStyle(() => ({
    opacity: opacityJournal.value,
    transform: [{ translateY: translateYJournal.value }],
  }));

  const animatedAllJournalStyle = useAnimatedStyle(() => ({
    opacity: opacityAllJournal.value,
    transform: [{ translateY: translateYAllJournal.value }],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Animated.View
          style={[
            animatedIndicatorStyle,
            {
              position: "absolute",
              top: height * 0.85,
              alignSelf: "center",
              alignItems: "center",
              zIndex: 1,
            },
          ]}
        >
          <Feather name="chevron-down" size={28} color="#384484" />
          <Text
            style={{
              color: "#384484",
              fontSize: 14,
              fontWeight: "600",
              top: -4,
            }}
          >
            Scroll down for more
          </Text>
        </Animated.View>

        <Animated.View
          style={[animatedAppleStyle, { minHeight: height * 0.914 }]}
        >
          <AppleInvites />
        </Animated.View>

        <Animated.View
          style={[animatedJournalStyle, { minHeight: height * 0.88 }]}
        >
          <JournalInstruction />
        </Animated.View>

        <Animated.View
          style={[animatedAllJournalStyle, { minHeight: height * 0.85 }]}
        >
          <AllJournal />
        </Animated.View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
