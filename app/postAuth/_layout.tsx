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
      </Drawer>
    </GestureHandlerRootView>
  );
}
