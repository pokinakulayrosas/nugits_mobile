import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import customDrawerContent from './customDrawerContent';

export default function Layout() {
  return (
    <GestureHandlerRootView   >
      <Drawer
      screenOptions={{
        drawerLabelStyle:{
          marginLeft:5,
          color: 'white',
        },
        drawerStyle:{
          backgroundColor: '#384484',
        },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
      }}
      drawerContent={customDrawerContent}
      >
        <Drawer.Screen
          name="Homepage" 
          options={{
        drawerLabel: 'Home',
        title: '',
        drawerIcon:({size,color})=>(
          <Ionicons name='home-outline' size={size} color={color}/>
        )
          }}
        />
        <Drawer.Screen
          name="Profile" 
          options={{
        drawerLabel: 'Profile',
        title: '',
        drawerIcon:({size,color})=>(
          <Ionicons name='person-outline' size={size} color={color}/>
        )
          }}
        />
         <Drawer.Screen
          name="Journal" 
          options={{
        drawerLabel: 'Journal',
        title: '',
        drawerIcon:({size,color})=>(
          <Ionicons name='document-outline' size={size} color={color}/>
        )
          }}
        />
        <Drawer.Screen
          name="Calendar" 
          options={{
        drawerLabel: 'Calendar',
        title: '',
        drawerIcon:({size,color})=>(
          <Ionicons name='calendar-number-outline' size={size} color={color}/>
        )
          }}
        />
        <Drawer.Screen
          name="SmartChat" 
          options={{
        drawerLabel: 'SmartChat',
        title: '',
        drawerIcon:({size,color})=>(
          <Ionicons name='create-outline' size={size} color={color}/>
        )
          }}
        />
        <Drawer.Screen
          name="Clearance" 
          options={{
        drawerLabel: 'Clearance',
        title: '',
        drawerIcon:({size,color})=>(
          <Ionicons name='journal-outline' size={size} color={color}/>
        )
          }}
        />
        <Drawer.Screen
          name="ScheduleViewer" 
          options={{
        drawerLabel: 'Schedule Viewer',
        title: '',
        drawerIcon:({size,color})=>(
          <Ionicons name='calendar-outline' size={size} color={color}/>
        )
          }}
        />
        <Drawer.Screen
          name="Meditation" 
          options={{
        drawerLabel: 'Meditation',
        title: '',
        drawerIcon:({size,color})=>(
          <Ionicons name='leaf-outline' size={size} color={color}/>
        )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
