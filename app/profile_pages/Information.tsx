import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ChevronDownIcon, ChevronLeftIcon } from "lucide-react-native";
import { TextInput } from "react-native-paper";

export default function Information() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#F0F8FF" }}>
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          onPress={() => router.push("/postAuth/Profile")}
          style={{
            alignItems: "center",
            paddingVertical: 12,
            paddingHorizontal: 18,
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            borderWidth: 1,
            borderColor: "#E0E0E0",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 3,
            elevation: 2,
            width: 50,
          }}
          activeOpacity={0.8}
        >
          <ChevronLeftIcon size={20} color="#384484" />
        </TouchableOpacity>

        <Text className="text-black font-semibold text-lg px-2 mt-4">
          Basic Information
        </Text>

        <View className="justify-center bg-white h-auto w-auto shadow-lg rounded-xl p-6 mb-6 mt-4">
          <View className="space-y-6 gap-6">
            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1 mt-2">
                Last Name <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="Manuzon"
                disabled
                mode="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#F0F8FF",
                  borderRadius: 8,
                  fontSize: 14,
                }}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                First Name <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="Alexandra"
                disabled
                mode="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#F0F8FF",
                  borderRadius: 8,
                  fontSize: 14,
                }}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Middle Name <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="Anala"
                disabled
                mode="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#F0F8FF",
                  borderRadius: 8,
                  fontSize: 14,
                }}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Suffix
              </Text>
              <TextInput
                value=""
                disabled
                mode="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#F0F8FF",
                  borderRadius: 8,
                  fontSize: 14,
                }}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Nationality <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="Filipino"
                disabled
                mode="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#F0F8FF",
                  borderRadius: 8,
                  fontSize: 14,
                }}
                theme={inputTheme}
              />
            </View>

            <View className="flex-row gap-4">
              <View className="flex-1">
                <Text className="text-md font-semibold text-black mb-1">
                  Birthdate <Text className="text-red-600">*</Text>
                </Text>
                <TextInput
                  value="31/12/2009"
                  disabled
                  mode="outlined"
                  style={{
                    height: 40,
                    backgroundColor: "#F0F8FF",
                    borderRadius: 8,
                    fontSize: 14,
                  }}
                  theme={inputTheme}
                />
              </View>

              <View className="flex-1">
                <Text className="text-md font-semibold text-black mb-1">
                  Religion
                </Text>
                <TextInput
                  value="Catholic"
                  disabled
                  mode="outlined"
                  style={{
                    height: 40,
                    backgroundColor: "#F0F8FF",
                    borderRadius: 8,
                    fontSize: 14,
                  }}
                  theme={inputTheme}
                />
              </View>
            </View>

            <View className="flex-row gap-4">
              <View className="flex-1">
                <Text className="text-md font-semibold text-black mb-1">
                  Country of Birth <Text className="text-red-600">*</Text>
                </Text>
                <View className="relative">
                  <TextInput
                    value="Philippines"
                    disabled
                    mode="outlined"
                    style={{
                      height: 40,
                      backgroundColor: "#F0F8FF",
                      borderRadius: 8,
                      fontSize: 14,
                    }}
                    theme={inputTheme}
                  />
                  <View className="absolute right-3 top-3">
                    <ChevronDownIcon size={18} color="#A0AEC0" />
                  </View>
                </View>
              </View>
            </View>

            <View className="flex-row gap-4">
              <View className="flex-1">
                <Text className="text-md font-semibold text-black mb-1">
                  Gender <Text className="text-red-600">*</Text>
                </Text>
                <View className="relative">
                  <TextInput
                    value="Female"
                    disabled
                    mode="outlined"
                    style={{
                      height: 40,
                      backgroundColor: "#F0F8FF",
                      borderRadius: 8,
                      fontSize: 14,
                    }}
                    theme={inputTheme}
                  />
                  <View className="absolute right-3 top-3">
                    <ChevronDownIcon size={18} color="#A0AEC0" />
                  </View>
                </View>
              </View>

              <View className="flex-1">
                <Text className="text-md font-semibold text-black mb-1">
                  Birthplace <Text className="text-red-600">*</Text>
                </Text>
                <TextInput
                  value="Manila"
                  disabled
                  mode="outlined"
                  style={{
                    height: 40,
                    backgroundColor: "#F0F8FF",
                    borderRadius: 8,
                    fontSize: 14,
                  }}
                  theme={inputTheme}
                />
              </View>
            </View>

            <View className="flex-row gap-4">
              <View className="flex-1">
                <Text className="text-md font-semibold text-black mb-1">
                  Civil Status <Text className="text-red-600">*</Text>
                </Text>
                <View className="relative">
                  <TextInput
                    value="Philippines"
                    disabled
                    mode="outlined"
                    style={{
                      height: 40,
                      backgroundColor: "#F0F8FF",
                      borderRadius: 8,
                      fontSize: 14,
                    }}
                    theme={inputTheme}
                  />
                  <View className="absolute right-3 top-3">
                    <ChevronDownIcon size={18} color="#A0AEC0" />
                  </View>
                </View>
              </View>
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Mobile Number <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="09953090548"
                disabled
                mode="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#F0F8FF",
                  borderRadius: 8,
                  fontSize: 14,
                }}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Telephone Number
              </Text>
              <TextInput
                value="09953090548"
                disabled
                mode="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#F0F8FF",
                  borderRadius: 8,
                  fontSize: 14,
                }}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Email Address <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="09953090548"
                disabled
                mode="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#F0F8FF",
                  borderRadius: 8,
                  fontSize: 14,
                }}
                theme={inputTheme}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const inputTheme = {
  colors: {
    primary: "#384484",
    background: "#F0F8FF",
    text: "#384484",
    placeholder: "#888",
    disabled: "#A0AEC0",
  },
};
