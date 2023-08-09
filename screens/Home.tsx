import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
        <StatusBar style="auto" />
        <Text className='text-red-500'>Open up App.js to start working on your app!</Text>
    </View>
  )
}

export default HomeScreen;
