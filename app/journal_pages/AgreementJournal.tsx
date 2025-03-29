import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

import { Checkbox, Button } from "react-native-paper";

function CustomHeader({ darkMode, toggleDarkMode }: any) {
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
        onPress={() => router.push("/postAuth/Journal")}
        style={{ padding: 8, borderRadius: 10 }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </TouchableOpacity>

      <Text className="text-md ml-24 text-white">{getToday()}</Text>

      <View className="flex-row gap-4 ">
        <TouchableOpacity onPress={toggleDarkMode}>
          <Ionicons
            name={darkMode ? "sunny-outline" : "moon-outline"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Open Notifications")}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function AgreementJournal() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [agreeChecked, setAgreeChecked] = useState(false);
  const [disagreeChecked, setDisagreeChecked] = useState(false);
  const [checked, setChecked] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setChecked(agreeChecked);
  }, [agreeChecked]);

  const handleAgreeChange = () => {
    setAgreeChecked(!agreeChecked);
    if (!agreeChecked && disagreeChecked) {
      setDisagreeChecked(false);
    }
  };

  const handleDisagreeChange = () => {
    const newValue = !disagreeChecked;
    setDisagreeChecked(newValue);
    if (newValue) {
      setAgreeChecked(false);
      router.push("/postAuth/Journal"); // Redirect if user disagrees
    }
  };

  const handleContinue = () => {
    if (checked) {
      router.push("/postAuth/Journal");
    } else {
      Alert.alert(
        "Terms Not Accepted",
        "Please accept the Terms and Agreement to proceed."
      );
    }
  };
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, backgroundColor: darkMode ? "#222" : "#F0F8FF" }}>
        <CustomHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <ScrollView
          contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="bg-[#384484] w-96 h-60 rounded-t-lg shadow-black border border-zinc-300 z-10">
            <Text className="px-5 py-6 text-2xl font-semibold text-white">
              Journal: Terms & Conditions
            </Text>
            <Text className="px-5 font-medium leading-normal text-justify text-base text-white">
              Dear Students,
            </Text>
            <Text className="px-5 py-3 leading-normal text-justify text-base text-white font-medium">
              Before you tick the 'I have read and agree to the Terms and
              Agreement.' box and continue, please make sure to read and
              understood the Terms and Agreement carefully.
            </Text>
          </View>

          <View className="bg-white w-96 h-auto shadow-black border border-l-zinc-300 border-r-zinc-300 border-b-zinc-300 border-t-white -pt-20">
            <View className="p-4">
              <Text className="text-base font-bold mb-2 text-[#384484]">
                I. Introduction
              </Text>

              <View className="flex-row items-start mb-2 mt-1">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  The{" "}
                  <Text className="italic font-extrabold">
                    Journal feature{" "}
                  </Text>
                  of NU-GITS is designed to offer students a private, reflective
                  space to express their thoughts, emotions, and experiences.
                </Text>
              </View>

              <View className="flex-row items-start mt-1">
                <View className="w-2 h-2 bg-black rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  By accessing and using this feature, users agree to the terms
                  outlined below.
                </Text>
              </View>
            </View>

            <View className="p-4">
              <Text className="font-bold mb-2 text-[#384484] text-base -mt-2">
                II. Confidentiality and Privacy
              </Text>

              <Text className="px-1 font-bold mb-2 text-[#384484] pt-1 text-base">
                1. User Access Only
              </Text>

              <View className="flex-row items-start mb-2 mt-1">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  Journal entries are strictly confidential and accessible only
                  by the student who created them.
                </Text>
              </View>

              <Text className="px-1 font-bold mb-2 text-[#384484] pt-2 text-base">
                2. Limited Admin Access
              </Text>

              <View className="flex-row items-start mb-2 mt-1">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  The system uses an automated keyword filter to flag entries
                  with potentially alarming or dangerous content.
                </Text>
              </View>

              <View className="flex-row items-start mb-2 mt-2">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  In such cases, the Guidance Office/Admin will only be notified
                  to ensure the student’s safety and well-being.
                </Text>
              </View>

              <View className="flex-row items-start mb-2 mt-2">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  Admins can view only the following metadata:
                </Text>
              </View>

              <View className="pl-6">
                <Text className="text-[#384484] font-medium text-justify mb-1">
                  a. Journal Title
                </Text>
                <Text className="text-[#384484] font-medium text-justify mb-1">
                  b. Entry Date
                </Text>
                <Text className="text-[#384484] font-medium text-justify">
                  c. Selected Mood
                </Text>
              </View>
            </View>

            <View className="p-4">
              <Text className="text-base font-bold mb-2 text-[#384484] -mt-2">
                III. Purpose and Intent
              </Text>

              <View className="flex-row items-start mb-2 mt-1">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  The Journal is a supportive self-reflection tool, not a
                  replacement for professional mental health services.
                </Text>
              </View>

              <View className="flex-row items-start mb-2 mt-2">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  It is meant to help students release emotional burdens and
                  track their mental well-being over time.
                </Text>
              </View>
            </View>

            <View className="p-4">
              <Text className="text-base font-bold mb-2 text-[#384484] -mt-3">
                IV. Data Retention and Account Deactivation
              </Text>

              <Text className="px-1 font-bold mb-2 text-[#384484] pt-1 text-base">
                1. Entry Deletion
              </Text>

              <View className="flex-row items-start mb-2 mt-1">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  All journal entries will be permanently deleted after the
                  student completes the exit interview process.
                </Text>
              </View>

              <Text className="px-1 font-bold mb-2 text-[#384484] pt-2 text-base">
                2. Account Deactivation
              </Text>

              <View className="flex-row items-start mb-2 mt-1">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  The NU-GITS account will be deactivated within 7 working days
                  following the completion of exit clearance procedures.
                </Text>
              </View>
            </View>

            <View className="p-4">
              <Text className="text-base font-bold mb-2 text-[#384484] -mt-2">
                V. Support and Intervention Protocol
              </Text>

              <Text className="px-1 font-bold mb-2 text-[#384484] pt-1 text-base">
                1. Privacy Assurance
              </Text>

              <View className="flex-row items-start mb-2 mt-1">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  The content of the journal remains confidential, and only
                  flagged words, along with the journal title, mood, and date,
                  will be visible to the admin for safety monitoring purposes.
                </Text>
              </View>

              <Text className="px-1 font-bold mb-2 text-[#384484] pt-2 text-base">
                2. Admin Response
              </Text>

              <View className="flex-row items-start mb-2 mt-1">
                <View className="w-2 h-2 bg-[#384484] rounded-full mt-2 mr-2" />
                <Text className="flex-1 text-[#384484] font-normal text-justify pr-2 pl-2">
                  In such cases, the Guidance Office may reach out to the
                  student to offer timely and appropriate support or
                  intervention.
                </Text>
              </View>
            </View>

            <View className=" px-5 py-3">
              <Text className="text-[#384484] font-bold text-base mb-2 text-justify">
                Before proceeding to use the Journal feature, please read and
                accept the Terms and Agreement stated above.
              </Text>

              <Text className="text-[#384484] font-medium text-sm  mb-2 text-justify mt-3">
                By ticking the checkbox below, you confirm that:
              </Text>

              <View className="ml-2 mt-1 px-2 gap-3">
                <Text className="text-[#384484] mb-1 text-justify">
                  • You have read and understood the Terms and Agreement for the
                  NU-GITS Journal feature.
                </Text>
                <Text className="text-[#384484] mb-1 text-justify">
                  • Acknowledge understanding of the journal’s intended purpose.
                </Text>
                <Text className="text-[#384484] mb-1 text-justify">
                  • Agree to the limited visibility of entry metadata (title,
                  date, mood).
                </Text>
                <Text className="text-[#384484] mb-1 text-justify">
                  • Accept the terms related to data retention and account
                  deactivation.
                </Text>
                <Text className="text-[#384484] text-justify">
                  • You voluntarily agree to the terms, including data handling,
                  keyword monitoring, and support protocols.
                </Text>
              </View>

              <View className="flex-row items-center mt-6 mr-8">
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => setChecked(!checked)}
                  color="#384484"
                />
                <Text className="text-[#384484] text-sm">
                  I have read and agree to the Terms and Agreement.
                </Text>
              </View>

              <View className="flex-row items-center mt-4">
                <Checkbox
                  status={disagreeChecked ? "checked" : "unchecked"}
                  onPress={handleDisagreeChange}
                  color="#384484"
                />
                <Text className="text-[#384484] text-sm font-base pr-6">
                  I do not agree to the Terms and Agreement.
                </Text>
              </View>

              <Button
                mode="contained"
                onPress={handleContinue}
                disabled={!checked}
                style={{
                  marginTop: 20,
                  backgroundColor: checked ? "#384484" : "#ccc",
                }}
                labelStyle={{ color: "white" }}
              >
                Proceed to Journal
              </Button>

              {!checked && (
                <Text className="text-xs text-red-600 mt-2 italic">
                  Access to creating a journal will only be granted after
                  accepting the terms. If you choose not to agree, you will be
                  redirected back to the front page of journal.
                </Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}
