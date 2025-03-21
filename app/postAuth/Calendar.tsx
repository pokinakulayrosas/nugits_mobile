import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Modal, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

type ItemType = {
  name: string;
  time: string;
};

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(moment().format("YYYY-MM"));
  const [yearModalVisible, setYearModalVisible] = useState(false);

  const events: { [key: string]: ItemType[] } = {
    "2024-04-29": [{ name: "Therapy Session", time: "10:00 AM" }],
    "2024-04-30": [
      { name: "Mindfulness Meditation", time: "8:00 AM" },
      { name: "Support Group Meeting", time: "6:00 PM" },
    ],
    "2025-01-01": [{ name: "New Year Reflection", time: "12:00 AM" }],
    "2025-03-02": [
      { name: "Self-care Planning", time: "9:00 AM" },
      { name: "Wellness Check-in", time: "2:00 PM" },
    ],
  };

  const markedDates = Object.keys(events).reduce((acc, date) => {
    acc[date] = { marked: true, dotColor: "#dbba44" };
    return acc;
  }, {} as { [key: string]: { marked: boolean; dotColor: string; selected?: boolean; selectedColor?: string } });

  if (selectedDate) {
    markedDates[selectedDate] = {
      ...markedDates[selectedDate],
      selected: true,
      selectedColor: "#384484",
    };
  }

  const selectYear = (year: number) => {
    setCurrentMonth(`${year}-01`);
    setYearModalVisible(false);
  };

  const goToToday = () => {
    const today = moment().format("YYYY-MM-DD");
    setSelectedDate(today);
    setCurrentMonth(moment().format("YYYY-MM"));
  };

  return (
    <View className="flex-1 bg-[#F0F8FF]">
      <FlatList
        ListHeaderComponent={
          <View className="px-4 pt-8">
            <View className="mb-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-row justify-center items-center">
              <Text className="text-2xl text-[#384484] font-semibold">
                Your calendar of <Text className="italic font-semibold">events</Text>
              </Text>
              <Image
                source={require("../../assets/eyes/half_circle.png")}
                style={{ width: 70, height: 80, marginBottom: 10 }}
              />
            </View>

            <View className="flex-row justify-between px-4 mb-4">
              <TouchableOpacity onPress={() => setYearModalVisible(true)} className="bg-[#384484] p-2 rounded-md">
                <Text className="text-white">Choose Year</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={goToToday} className="bg-[#384484] p-2 rounded-md">
                <Text className="text-white">Today</Text>
              </TouchableOpacity>
            </View>

            <Calendar
              key={currentMonth}
              current={currentMonth}
              onDayPress={(day: { dateString: string }) => setSelectedDate(day.dateString)}
              markedDates={markedDates}
              theme={{
                selectedDayBackgroundColor: "#384484",
                todayTextColor: "#384484",
                arrowColor: "#384484",
                textSectionTitleColor: "#000000",
                dayTextColor: "#000000",
                textDisabledColor: "#888888",
                monthTextColor: "#000000",
                textDayFontWeight: "300",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "500",
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 14,
                calendarBackground: "#FFFFFF",
                textMonthWeight: "bold",
              }}
              style={{
                borderRadius: 12,
                elevation: 5,
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                paddingBottom: 10,
              }}
            />

            <View className="mt-6">
              <Text className="text-xl font-semibold text-[#384484]">
                {selectedDate ? `Events on ${selectedDate}` : "Select a date"}
              </Text>
            </View>
          </View>
        }
        data={selectedDate && events[selectedDate] ? events[selectedDate] : []}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="mt-3 mx-4 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
            <Text className="text-lg font-semibold text-[#384484]">{item.name}</Text>
            <Text className="text-gray-600">{item.time}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center bg-[#F0F8FF] py-20">
            <Text className="text-gray-500 italic text-center">No events for this day</Text>
          </View>
        }
      />

      {/* Year Selection Modal */}
      <Modal visible={yearModalVisible} transparent animationType="slide">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-6 rounded-lg w-80">
            <Text className="text-xl font-bold text-[#384484] text-center mb-4">Select a Year</Text>
            <ScrollView style={{ maxHeight: 300 }}>
              {[...Array(11)].map((_, index) => {
                const year = 2020 + index;
                return (
                  <TouchableOpacity
                    key={year}
                    onPress={() => selectYear(year)}
                    className="p-2 border-b border-gray-300"
                  >
                    <Text
                      className={`text-lg text-center ${
                        currentMonth.startsWith(`${year}`) ? "text-[#dbba44] font-bold" : "text-black"
                      }`}
                    >
                      {year}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <TouchableOpacity onPress={() => setYearModalVisible(false)} className="mt-4 bg-red-500 p-2 rounded-md">
              <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CalendarScreen;
