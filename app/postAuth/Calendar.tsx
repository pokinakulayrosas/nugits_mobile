import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';

const Calendar = () => {
  const initialItems = {
    '2024-04-29': [{ name: 'Meeting with client', time: '10:00 AM' }],
    '2024-04-30': [
      { name: 'Team brainstorming session', time: '9:00 AM' },
      { name: 'Project presentation', time: '2:00 PM' },
      { name: 'Project presentation', time: '5:00 PM' }
    ],
    '2025-01-01': [{ name: 'New Year Celebration', time: '12:00 AM' }],
    '2025-03-02': [
      { name: 'Team brainstorming session', time: '9:00 AM' },
      { name: 'Project presentation', time: '2:00 PM' }
    ],
  };

  const [items, setItems] = useState(initialItems);

  const renderEmptyData = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No events for this day</Text>
    </View>
  );

  const renderItem = useCallback(
    (item: { name: string; time: string }) => (
      <View
        style={{
          marginVertical: 10,
          marginTop: 30,
          backgroundColor: 'white',
          marginHorizontal: 10,
          padding: 10,
          borderRadius: 8,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: 'gray' }}>{item.time}</Text>
      </View>
    ),
    []
  );

  return (
    <View className="flex-1 space-x-10 ">
      <Text>Your calendar</Text>
      <View className="flex-1 bg-pink-200">
      <Agenda
        items={items}
        showOnlySelectedDayItems
        renderEmptyData={renderEmptyData}
        renderItem={renderItem}
      />
      </View>
    </View>
  );
};

export default Calendar;
