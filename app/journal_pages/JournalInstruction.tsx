import { View, Text, FlatList } from "react-native";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const create = [
  "Click the 'Create Journal' button to begin.",
  "Read the agreement form carefully, then select the option that applies to you by ticking the box.",
  "Choose a date for your journal entry (you can only select dates from when you created your account).",
  "Select the emotion that best describes your current feeling.",
  "Click the arrow 'Next' to proceed.",
  "Create a title and write the content of your journal entry.",
  "Once you're done, click 'Submit.'",
];

const deleted = [
  "Click on the journal entry you want to modify.",
  "To update, edit the content and click 'Update'.",
  "To delete, click the entry and then select 'Delete'.",
];

export default function JournalInstruction() {
  return (
    <View className="flex flex-col gap-10">
      <Card className="w-full max-w-sm flex justify-center mx-auto bg-white shadow-lg border border-zinc-400">
        <CardHeader>
          <CardTitle className="text-md p-1 flex text-center text-[#384484]">
            Instructions for creating and managing a journal entry
          </CardTitle>
          <View className="h-[1px] bg-[#384484] mt-2 rounded-md" />
        </CardHeader>
        <CardContent>
          {create.map((item, index) => (
            <View key={index} style={{ flexDirection: "row", padding: 4 }}>
              <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                {index + 1}.
              </Text>
              <Text className="text-sm">{item}</Text>
            </View>
          ))}
        </CardContent>
      </Card>
      <View>
        <Card className="w-full max-w-sm flex justify-center mx-auto bg-white shadow-lg border border-zinc-400">
          <CardHeader>
            <CardTitle className="text-md p-1 flex text-center text-[#384484]">
              To delete or update an existing journal entry
            </CardTitle>
            <View className="h-[1px] bg-[#384484] mt-2 rounded-md" />
          </CardHeader>
          <CardContent>
            {deleted.map((item, index) => (
              <View key={index} style={{ flexDirection: "row", padding: 4 }}>
                <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                  {index + 1}.
                </Text>
                <Text className="text-sm">{item}</Text>
              </View>
            ))}
          </CardContent>
        </Card>
      </View>
    </View>
  );
}
