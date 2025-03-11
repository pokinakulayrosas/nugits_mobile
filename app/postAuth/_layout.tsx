import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="Homepage" 
          options={{
            drawerLabel: 'Homepage',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="Profile" 
          options={{
            drawerLabel: 'Profile',
            title: 'overview',
          }}
        />
         <Drawer.Screen
          name="Journal" 
          options={{
            drawerLabel: 'Journal',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="Calendar" 
          options={{
            drawerLabel: 'Calendar',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="SmartChat" 
          options={{
            drawerLabel: 'SmartChat',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="Clearance" 
          options={{
            drawerLabel: 'Clearance',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="ScheduleViewer" 
          options={{
            drawerLabel: 'Schedule Viewer',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="Meditation" 
          options={{
            drawerLabel: 'Meditation',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
