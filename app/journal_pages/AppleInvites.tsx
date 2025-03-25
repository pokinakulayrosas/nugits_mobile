import { View, Image, Dimensions, StyleSheet, Text } from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Marquee } from "@animatereactnative/marquee";
import {
  useAnimatedReaction,
  useSharedValue,
  runOnJS,
  FadeIn,
  FadeOut,
  FadeInUp,
  Easing,
} from "react-native-reanimated";
import { Stagger } from "@animatereactnative/stagger";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const images = [
  { id: "1", image: require("../../assets/journal_images/Happy.png") },
  { id: "2", image: require("../../assets/journal_images/Angry.png") },
  { id: "3", image: require("../../assets/journal_images/Nonchalant.png") },
  { id: "4", image: require("../../assets/journal_images/Sad.png") },
];

const { width } = Dimensions.get("window");
const _itemWidth = 420;
const _itemHeight = 500;
const _spacing = 20;
const _itemSize = _itemWidth + _spacing;

function Item({ image }: { image: any }) {
  return (
    <Animated.View
      style={{
        width: _itemWidth,
        height: _itemHeight,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <Image
        source={image}
        style={{ flex: 1, borderRadius: 16 }}
        resizeMode="cover"
      />
    </Animated.View>
  );
}

export default function JournalScreen() {
  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(1);
  const [restartKey, setRestartKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setRestartKey((prev) => prev + 1);
      return () => {};
    }, [])
  );

  useAnimatedReaction(
    () => {
      const floatIndex =
        ((offset.value + width / 2) / _itemSize) % images.length;
      return Math.abs(Math.floor(floatIndex));
    },
    (value) => {
      runOnJS(setActiveIndex)(value);
    }
  );

  return (
    <View
      key={restartKey}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={[StyleSheet.absoluteFillObject, { opacity: 0.5 }]}>
        <Animated.Image
          key={`image-${activeIndex}`}
          source={images[activeIndex]?.image}
          style={{ flex: 1, opacity: 0.5 }}
          blurRadius={50}
          entering={FadeInUp.duration(1000)}
          exiting={FadeOut.duration(1000)}
        />
      </View>

      <Stagger
        initialEnteringDelay={1000}
        duration={500}
        stagger={100}
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
      >
        <Animated.View entering={FadeInUp.duration(1000).delay(200)}>
          <Text
            style={{
              color: "#384484",
              fontSize: 35,
              fontWeight: "bold",
              marginBottom: 16,
              letterSpacing: 2,
              marginTop: -80,
            }}
          >
            Journal
          </Text>
        </Animated.View>
      </Stagger>

      <Marquee spacing={_spacing} position={offset} style={{ width: "100%" }}>
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: _spacing,
            marginTop: -60,
          }}
          entering={FadeInUp.delay(500)
            .duration(1000)
            .easing(Easing.elastic(0.9))}
        >
          {images.map(({ image }, index) => (
            <Item key={`image-${index}`} image={image} />
          ))}
        </Animated.View>
      </Marquee>
    </View>
  );
}
