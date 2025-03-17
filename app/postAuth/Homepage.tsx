import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Carousel from '../homedesign/carousel'
const affirmations = [
  "Take a deep breath. You are doing great!",
  "Your mental health matters. Be kind to yourself.",
  "One step at a time. Progress, not perfection.",
  "You are loved, valued, and enough.",
  "Rest is productive. Listen to your mind & body.",
];
export default function Homepage() {


   const [affirmation, setAffirmation] = useState(
       affirmations[Math.floor(Math.random() * affirmations.length)]
     );

  return (
    <View className='flex-1  bg-red-600'>
      <Carousel />

      <View className="mb-6 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
            <Text className="text-xl font-semibold text-[#384484] text-center">
              {affirmation}
            </Text>
          </View>


    </View>
  )
}