import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  DimensionValue,
} from "react-native";
import React, { useState } from "react";
import SelectList from "react-native-dropdown-select-list";

import { TextInput, Button } from "react-native-paper";

export default function ClearanceOutline() {
  const [visible, setVisible] = useState(false);

  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Graduation" },
    { key: "2", value: "Transfer" },
    { key: "3", value: "Withdrawal" },
    { key: "4", value: "Other" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="justify-center bg-white h-auto w-auto shadow-lg rounded-xl p-6 mb-6 mt-4">
          <View className="items-center mb-10">
            <Text className="font-semibold text-2xl text-[#384484] text-center">
              Clearance Form
            </Text>
            <View className="h-[2px] w-14 bg-[#384484] mt-2 rounded-md" />
          </View>

          <View className="space-y-6 gap-6">
            <View className="flex flex-col">
              <Text className="text-md font-normal text-black mb-1">
                First Name:
              </Text>
              <TextInput
                value="Hannah"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-normal text-black mb-1">
                Middle Name:
              </Text>
              <TextInput
                value="Anala"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-normal text-black mb-1">
                Last Name:
              </Text>
              <TextInput
                value="Manuzon"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-normal text-black mb-1">
                Suffix:
              </Text>
              <TextInput
                value=""
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-normal text-black mb-1">
                Student Number (Ex. 2019-123456):
              </Text>
              <TextInput
                value="2019-123456"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-normal text-black mb-1">
                Email:
              </Text>
              <TextInput
                value="alexganda@yahoo.com"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <View className="flex flex-col">
              <Text className="text-md font-normal text-black mb-1">
                Contact Number:
              </Text>
              <TextInput
                value="09953090548"
                disabled
                mode="outlined"
                style={inputStyles}
                theme={inputTheme}
              />
            </View>

            <Text className="text-md font-normal text-black">
              Reason for clearance:
            </Text>
            <SelectList
              data={data}
              setSelected={setSelected}
              placeholder="Select a reason"
              search={false}
              boxStyles={{
                borderColor: "#384484",
                backgroundColor: "#F8FCFF",
                borderRadius: 8,
                height: 50,
                paddingHorizontal: 10,
                marginTop: -16,
              }}
              dropdownStyles={{
                backgroundColor: "#fff",
                borderColor: "#384484",
                borderRadius: 8,
              }}
              inputStyles={{
                color: "#384484",
                fontSize: 14,
                fontWeight: "500",
              }}
              dropdownItemStyles={{
                padding: 10,
              }}
              dropdownTextStyles={{
                color: "#384484",
                fontSize: 14,
              }}
              onSelect={() => console.log("Selected:", selected)}
            />
            <Button
              mode="elevated"
              onPress={() => console.log("Pressed")}
              style={{
              backgroundColor: "white",
              width: 100,
              }}
              labelStyle={{
              color: "black",
              }}
              rippleColor="#d3d3d3"
            >
              Submit
            </Button>
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
  color: "#384484",
};

const inputTheme = {
  colors: {
    primary: "#384484",
    background: "#F0F8FF",
    text: "#384484",
    placeholder: "#888",
    disabled: "#384484",
  },
};
