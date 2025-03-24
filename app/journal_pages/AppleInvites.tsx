import { View, Image, Dimensions, StyleSheet, Animated } from "react-native";
import React, { useState } from "react";
import { Marquee } from "@animatereactnative/marquee";
import { useAnimatedReaction, useSharedValue, runOnJS } from "react-native-reanimated";

const images = [
  { id: "1", image: require("../../assets/journal_images/Happy.png") },
  { id: "2", image: require("../../assets/journal_images/Angry.png") },
  { id: "3", image: require("../../assets/journal_images/Nonchalant.png") },
  { id: "4", image: require("../../assets/journal_images/Sad.png") },
];

const { width } = Dimensions.get("window");
const _itemWidth = width * 0.62;
const _itemHeight = _itemWidth * 1.67;
const _spacing = 20;

function Item({ image, isLast }: { image: any; isLast: boolean }) {
  return (
    <View
      style={{
        width: _itemWidth,
        height: _itemHeight,
        borderRadius: 16,
        marginRight: isLast ? 0 : _spacing,
      }}
    >
      <Image source={image} style={{ flex: 1, borderRadius: 16 }} resizeMode="cover" />
    </View>
  );
}

export default function AppleInvites() {
  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  
  useAnimatedReaction(
    () => Math.round((offset.value / _itemWidth) % images.length),
    (value) => {
      if (value !== activeIndex) {
        runOnJS(setActiveIndex)(value); 
      }
    }
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={[StyleSheet.absoluteFillObject]}>
        <Animated.Image
          key={`image-${activeIndex}`}
          source={images[activeIndex]?.image} 
          style={{ flex: 1, opacity: 0.5 }}
          resizeMode="cover"
        />
      </View>

      <Marquee spacing={_spacing} position={offset}>
        <View style={{ flexDirection: "row" }}>
          {images.map(({ image }, index) => (
            <Item key={`image-${index}`} image={image} isLast={index === images.length - 1} />
          ))}
        </View>
      </Marquee>
    </View>
  );
}
