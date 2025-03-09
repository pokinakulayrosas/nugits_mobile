import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { LinearGradient } from "expo-linear-gradient";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const router = useRouter();
  const [bgColor, setBgColor] = useState("#F5F7FF"); // Default Background Color

  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Form Data:", data);
  });

  // Mood-Based Background Colors
  const moodColors = {
    "😡": "#FF4D4D", // Angry - Red
    "😢": "#4D79FF", // Sad - Blue
    "😊": "#FFD54F", // Happy - Yellow
    "😴": "#A1887F", // Sleepy - Brown
    "😎": "#66BB6A", // Cool - Green
    "🤯": "#AB47BC", // Mind-blown - Purple
  };

  return (
    <View className="flex-1 px-6 justify-center" style={{ backgroundColor: bgColor }}>
      {/* Logo */}
      <View className="items-center mb-6">
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="text-3xl font-bold text-[#384484] mt-6">
          Sign In to your account
        </Text>
      </View>

      {/* Mood Selection Emojis */}
      <View className="flex-row justify-center space-x-3 mb-6">
        {Object.entries(moodColors).map(([emoji, color]) => (
          <TouchableOpacity key={emoji} onPress={() => setBgColor(color)}>
            <Text className="text-2xl mr-4">{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FormProvider {...methods}>
        <View className="space-y-4 items-center flex flex-column-1">
         
          <View className="w-10/12">
            <Text className="text-[#384484] font-semibold mb-2 mt-5 ml-2">
              Email
            </Text>
            <Input
              placeholder="Enter your email"
              {...methods.register("email")}
              className="bg-white rounded-full text-black border-x-slate-500"
            />
            {methods.formState.errors.email && (
              <Text className="text-red-500">
                {methods.formState.errors.email.message}
              </Text>
            )}
          </View>

         
          <View className="w-10/12">
            <Text className="text-[#384484] font-semibold mb-2 mt-5 ml-2">
              Password
            </Text>
            <Input
              placeholder="Enter your password"
              secureTextEntry
              {...methods.register("password")}
              className="bg-white rounded-full text-black border-x-slate-500"
            />
            {methods.formState.errors.password && (
              <Text className="text-red-500 mt-1">
                {methods.formState.errors.password.message}
              </Text>
            )}
          </View>

          <TouchableOpacity className="self-end mr-10 mt-2" onPress={() => router.push("/ForgotPassword")}>
            <Text className="text-[#384484] font-medium text-sm">Forgot Password?</Text>
          </TouchableOpacity>

            {/* push sample */}
         
          <TouchableOpacity
            className="mt-10 w-10/12 rounded-full overflow-hidden shadow-md active:opacity-80"
            onPress={onSubmit}
          >
            <LinearGradient
              colors={["#1E2A5A", "#384484"]}
              className="px-8 py-3 flex items-center justify-center rounded-full"
            >
              <Text className="text-white font-semibold text-lg tracking-wide">
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </FormProvider>

      {/* Signup Link */}
      <TouchableOpacity className="mt-4" onPress={() => router.push("/Signup")}>
        <Text className="text-center text-[#384484]">
          Don't have an account?{" "}
          <Text className="underline text-[#384484] font-bold"> Sign up </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
