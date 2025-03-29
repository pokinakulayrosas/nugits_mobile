import { useState } from 'react';
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import customDrawerContent from '../customDrawerContent';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const colorScheme = useColorScheme();

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const getToday = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'short', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerLeft: () => (
            <DrawerToggleButton tintColor="white" />
          ),
          headerTitle: () => (
            <Text className="text-md ml-28 text-white">{getToday()}</Text>
          ),
          headerRight: () => (
            <View className="flex-row gap-4 pr-4">
              <TouchableOpacity onPress={toggleDarkMode}>
                <Ionicons name={darkMode ? 'sunny-outline' : 'moon-outline'} size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Open Notifications')}>
                <Ionicons name="notifications-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ),
          drawerLabelStyle: {
            marginLeft: 5,
            color: 'white',
          },
          drawerStyle: {
            backgroundColor: darkMode ? '#222' : '#384484',
          },
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          headerStyle: {
            backgroundColor: darkMode ? '#111' : '#384484',
          },
        }}
        drawerContent={customDrawerContent}
      >
        <Drawer.Screen
          name="Homepage"
          options={{
            drawerLabel: 'Home',
            title: '',
            drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            drawerLabel: 'Profile',
            title: '',
            drawerIcon: ({ size, color }) => <Ionicons name="person-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Journal"
          options={{
            drawerLabel: 'Journal',
            title: '',
            drawerIcon: ({ size, color }) => <Ionicons name="document-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Calendar"
          options={{
            drawerLabel: 'Calendar',
            title: '',
            drawerIcon: ({ size, color }) => <Ionicons name="calendar-number-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="SmartChat"
          options={{
            drawerLabel: 'SmartChat',
            title: '',
            drawerIcon: ({ size, color }) => <Ionicons name="create-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Clearance"
          options={{
            drawerLabel: 'Clearance',
            title: '',
            drawerIcon: ({ size, color }) => <Ionicons name="journal-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="ScheduleViewer"
          options={{
            drawerLabel: 'Schedule Viewer',
            title: '',
            drawerIcon: ({ size, color }) => <Ionicons name="calendar-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Meditation"
          options={{
            drawerLabel: 'Meditation',
            title: '',
            drawerIcon: ({ size, color }) => <Ionicons name="leaf-outline" size={size} color={color} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
