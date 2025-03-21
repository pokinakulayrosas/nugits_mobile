import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Address() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          padding: 10,
          backgroundColor: '#f0f0f0',
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>Back</Text>
      </TouchableOpacity>

      {/* Page Content */}
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Address</Text>
    </View>
  );
}