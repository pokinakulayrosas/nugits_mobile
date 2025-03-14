import { Slot, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function Layout() {
  const router = useRouter();

  useEffect(() => {

    // ito ang route na magl-load kapag inopen ng user ang App ninyo

    // UNCOMMENT KAPAG GUSTO MO IBALIK SA DEFAULT
  //   router.replace('/preAuth'); // Redirect to preAuth route
  // }, [router]);
    
  // development route
    router.replace('/postAuth/Homepage'); // Redirect to preAuth route
  }, [router]);

  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}