import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  DimensionValue,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { ChevronDownIcon } from "lucide-react-native";
import { TextInput } from "react-native-paper";
import CustomHeader from "../../components/CustomHeader";

export default function Address() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? "#222" : "#F0F8FF" }}>
      <CustomHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="font-semibold px-2 py-2 text-xl">Present Address</Text>
        <View className="justify-center bg-white h-auto w-auto shadow-lg rounded-xl p-6 mb-6 mt-4">
          <View className="space-y-6 gap-6">
            <View className="flex-1">
              <Text className="text-md font-semibold text-black mb-1">
                Province <Text className="text-red-600">*</Text>
              </Text>
              <View className="relative">
                <TextInput
                  value="Metro Manila"
                  disabled
                  mode="outlined"
                  style={inputStyles}
                  theme={inputTheme}
                />
                <View className="absolute right-3 top-3">
                  <ChevronDownIcon size={18} color="#A0AEC0" />
                </View>
              </View>
            </View>

            <View className="flex-1">
              <Text className="text-md font-semibold text-black mb-1">
                City/Municipality <Text className="text-red-600">*</Text>
              </Text>
              <View className="relative">
                <TextInput
                  value="Quezon City"
                  disabled
                  mode="outlined"
                  style={inputStyles}
                  theme={inputTheme}
                />
                <View className="absolute right-3 top-3">
                  <ChevronDownIcon size={18} color="#A0AEC0" />
                </View>
              </View>
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                House No./St. <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="11 Tinagan"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Barangay <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="San Jose"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Postal Code<Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="1115"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>
          </View>
        </View>

        <Text className="font-semibold px-2 py-2 text-xl">
          Permanent Address
        </Text>

        <View className="justify-center bg-white h-auto w-auto shadow-lg rounded-xl p-6 mb-6 mt-4">
          <View className="space-y-6 gap-6">
            <View className="flex-1">
              <Text className="text-md font-semibold text-black mb-1">
                Country<Text className="text-red-600">*</Text>
              </Text>
              <View className="relative">
                <TextInput
                  value="Philippines"
                  disabled
                  mode="outlined"
                  style={inputStyles}
                  theme={inputTheme}
                />
                <View className="absolute right-3 top-3">
                  <ChevronDownIcon size={18} color="#A0AEC0" />
                </View>
              </View>
            </View>

            <View className="flex-1">
              <Text className="text-md font-semibold text-black mb-1">
                Province<Text className="text-red-600">*</Text>
              </Text>
              <View className="relative">
                <TextInput
                  value="Metro Manila"
                  disabled
                  mode="outlined"
                  style={inputStyles}
                  theme={inputTheme}
                />
                <View className="absolute right-3 top-3">
                  <ChevronDownIcon size={18} color="#A0AEC0" />
                </View>
              </View>
            </View>

            <View className="flex-1">
              <Text className="text-md font-semibold text-black mb-1">
                City/Municipality <Text className="text-red-600">*</Text>
              </Text>
              <View className="relative">
                <TextInput
                  value="Quezon City"
                  disabled
                  mode="outlined"
                  style={inputStyles}
                  theme={inputTheme}
                />
                <View className="absolute right-3 top-3">
                  <ChevronDownIcon size={18} color="#A0AEC0" />
                </View>
              </View>
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                House No./St. <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="11 Tinagan"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Barangay <Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="San Jose"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-semibold text-black mb-1">
                Postal Code<Text className="text-red-600">*</Text>
              </Text>
              <TextInput
                value="1115"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const inputStyles = {
  width: "100%" as DimensionValue,
  height: 40,
  backgroundColor: "#F8FCFF",
  borderRadius: 8,
  fontSize: 14,
};

const inputTheme = {
  colors: {
    primary: "#384484",
    background: "#F0F8FF",
    text: "#384484",
    placeholder: "#888",
    disabled: "#A0AEC0",
  },
};
