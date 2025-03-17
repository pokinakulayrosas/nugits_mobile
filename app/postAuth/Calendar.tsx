import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

type ItemType = {
  name: string;
  time: string;
};

const CalendarScreen = () => {
  const events: { [key: string]: ItemType[] } = {
    '2024-04-29': [{ name: 'Meeting with client', time: '10:00 AM' }],
    '2024-04-30': [
      { name: 'Team brainstorming session', time: '9:00 AM' },
      { name: 'Project presentation', time: '2:00 PM' },
      { name: 'Project presentation', time: '5:00 PM' },
    ],
    '2025-01-01': [{ name: 'New Year Celebration', time: '12:00 AM' }],
    '2025-03-02': [
      { name: 'Team brainstorming session', time: '9:00 AM' },
      { name: 'Project presentation', time: '2:00 PM' },
    ],
  };

  const [selectedDate, setSelectedDate] = useState('');

  const markedDates = Object.keys(events).reduce((acc, date) => {
    acc[date] = { marked: true, dotColor: '#FF69B4' };
    return acc;
  }, {} as { [key: string]: { marked: boolean; dotColor: string; selected?: boolean; selectedColor?: string } });

  if (selectedDate) {
    markedDates[selectedDate] = {
      ...markedDates[selectedDate],
      selected: true,
      selectedColor: '#FF69B4',
    };
  }

  return (
    <View className="flex-1 p-4 bg-[#F0F8FF]">
     <View className='flex-1'>
      <Text className="text-2xl font-bold text-center">Welcome, Alex!</Text>
      <Text className="text-2xl font-bold text-center">Check your events</Text>


     </View>
      
      <Calendar
        onDayPress={(day: { dateString: React.SetStateAction<string>; }) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: '#FF69B4',
          todayTextColor: '#FF69B4',
          arrowColor: '#FF69B4',
          textSectionTitleColor: '#FFFFFF', //text color
          dayTextColor: '#FFFFFF', // text color
          textDisabledColor: '#888888', // text color for disabled days
          monthTextColor: '#FFFFFF', // text color for month
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
          calendarBackground: '#384484',
        
        }}
        style={{
          borderRadius: 10,}}

      />

      <View className="mt-5 mx-4">
        <Text className="text-lg font-bold">
       {selectedDate || 'No date selected'}
        </Text>

        {selectedDate && events[selectedDate] ? (
          <FlatList
            data={events[selectedDate]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="p-3 bg-white rounded-lg shadow-md my-2">
                <Text className="font-bold">{item.name}</Text>
                <Text className="text-gray-500">{item.time}</Text>
              </View>
            )}
          />
        ) : (
          <Text className="text-gray-500 mt-2">No events for this day</Text>
        )}
      </View>
    </View>
  );
};

export default CalendarScreen;