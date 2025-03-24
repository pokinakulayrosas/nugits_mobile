import { View, Text } from 'react-native'
import React from 'react'
import AppleInvites from '../journal_pages/AppleInvites'
import { GestureHandlerRootView } from 'react-native-gesture-handler'



export default function Journal() {
  return ( 
    <GestureHandlerRootView style={{flex:1}}>
      <AppleInvites/>

    </GestureHandlerRootView>
   
  )
} 