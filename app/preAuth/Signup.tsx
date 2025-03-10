import { View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { LinearGradient } from "expo-linear-gradient";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function Signup() {
  const router = useRouter();

  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Form Data:", data);
  });



  return (
    <View className="flex-1 px-6 justify-center">
      <View className="items-center mb-6">
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="text-3xl font-bold text-[#384484] mt-6">
          Create an account
        </Text>
      </View>

      <FormProvider {...methods}>
        <View className="space-y-4 items-center flex flex-column-1">
         
          <View className="w-10/12">
            <Text className="text-[#384484] font-semibold mb-2 mt-5 ml-2">
              Email
            </Text>
            <Input
              placeholder="eg. delacruz@students.nu-moa.edu.ph"
              {...methods.register("email")}
              className="bg-white rounded-full text-black border-x-slate-500 overflow-auto text-xs"
            />
            {methods.formState.errors.email && (
              <Text className="text-red-500">
                {methods.formState.errors.email.message}
              </Text>
            )}
          </View>

         
         
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
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </FormProvider>

      {/* Signup Link */}
      <TouchableOpacity className="mt-4" onPress={() => router.push("/preAuth/Login")}>
        <Text className="text-center text-[#384484]">
          Already have an account?{" "}
          <Text className="underline text-[#384484] font-bold"> Sign In </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
