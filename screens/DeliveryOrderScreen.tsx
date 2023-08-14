import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import * as Progress from 'react-native-progress'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import MapView, { Marker } from 'react-native-maps';

import { RootStackParamList } from '../App';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useRestaurantStore } from '../store/restaurantStore';

const DeliveryOrderScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'DeliveryOrderScreen'>> = ({ navigation }) => {
  const { restaurant } = useRestaurantStore();

  return (
    <SafeAreaView className='bg-[#00ccbb] z-50 flex-1'>
      <View className='flex-row justify-between items-center p-5'>
        <TouchableOpacity onPressIn={() => navigation.navigate('HomeScreen')}>
          <XMarkIcon color='white' size={30} />
        </TouchableOpacity>
        <Text className='font-light text-white text-lg'>Order Help</Text>
      </View>
      <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-lg'>
        <View className='flex-row justify-between mb-4'>
          <View>
            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
            <Text className='text-3xl font-bold'>25-35 Minutes</Text>
          </View>
          <Image source={{ uri: 'https://links.papareact.com/fls' }} className='h-16 w-16' />
        </View>
        <Progress.Bar color='#00ccbb' indeterminate={true} />
      </View>
      <MapView
        initialRegion={{
          latitude: restaurant?.lat!,
          longitude: restaurant?.lng!,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        zoomEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant?.lat!,
            longitude: restaurant?.lng!,
          }}
          title={restaurant?.name}
          description={restaurant?.short_description}
          identifier='origin'
          pinColor='#00ccbb'
        />
      </MapView>
      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-20'>
        <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5' />
        <View className='flex-1'>
          <Text className='text-lg'>Ernesto Mayoral</Text>
          <Text className='text-gray-400'>Your Rider</Text>
        </View>
        <Text className='text-[#00ccbb] text-lg mr-5 font-bold'>Call</Text>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default DeliveryOrderScreen