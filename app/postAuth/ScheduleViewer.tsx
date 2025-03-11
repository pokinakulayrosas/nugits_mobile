import React from "react";
import { View, ScrollView } from "react-native";
import { Card, Text, Layout } from "@ui-kitten/components";

interface Schedules {
  CounselorName: string;
  Schedule: string;
  Time: string;
  Modality: string;
}

const scheduleData: Schedules[] = [
  { CounselorName: "Sean Morales", Schedule: "-", Time: "8:00 AM", Modality: "Online" },
  { CounselorName: "Sean Morales", Schedule: "-", Time: "9:00 AM", Modality: "Online" },
  { CounselorName: "Sean Morales", Schedule: "-", Time: "11:00 AM", Modality: "Face to Face" },
  { CounselorName: "Sean Morales", Schedule: "-", Time: "2:00 PM", Modality: "Online" },
  { CounselorName: "Sean Morales", Schedule: "-", Time: "4:00 PM", Modality: "Face to Face" },
];

const ScheduleViewer: React.FC = () => {
  return (
    <Layout className="flex-1 p-5 bg-gray-100">
      <Text category="h3" className="text-center font-bold text-blue-800 mb-4">
        Schedule Viewer
      </Text>

     

      <ScrollView>

          {/* Subtitle */}
      <Text category="h5" className="text-center font-semibold text-gray-700 mb-4">
        Schedules of the Guidance Counselors
      </Text>
      
        <View className="rounded-lg overflow-hidden">
          {/* Table Header */}
          <View className="flex-row justify-between items-center bg-blue-800 py-4 px-2 rounded-t-lg">
            <Text className="text-white font-bold flex-1 text-center">Counselor</Text>
            <Text className="text-white font-bold flex-1 text-center">Schedule</Text>
            <Text className="text-white font-bold flex-1 text-center">Time</Text>
            <Text className="text-white font-bold flex-1 text-center">Modality</Text>
          </View>

          {/* Table Rows */}
          {scheduleData.map((item, index) => (
            <Card key={index} className="my-2 mx-1 p-3 bg-white rounded-lg shadow-md">
              <View className="flex-row justify-between items-center py-2">
                <Text className="text-gray-700 flex-1 text-center font-semibold">{item.CounselorName}</Text>
                <Text className="text-gray-700 flex-1 text-center">{item.Schedule}</Text>
                <Text className="text-gray-700 flex-1 text-center">{item.Time}</Text>
                <Text
                  className={`flex-1 text-center font-bold ${
                    item.Modality === "Online" ? "text-green-600" : "text-blue-500"
                  }`}
                >
                  {item.Modality}
                </Text>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ScheduleViewer;
