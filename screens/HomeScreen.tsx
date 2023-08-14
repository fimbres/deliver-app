import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, SafeAreaView, Text, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='bg-white'>
      <StatusBar style="auto" />
      <View className='flex-row pb-3 items-center mx-4 space-x-2 pt-3'>
        <Image source={{ uri: 'https://links.papareact.com/wru'}} className='w-7 h-7 bg-gray-300 p-4 rounded-full'/>
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00ccbb' />
          </Text>
        </View>
        <UserIcon size={35} color='#00ccbb' />
      </View>
      <View className='flex-row items-center space-x-2 mx-4 pb-4'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 rounded-md p-3'>
          <MagnifyingGlassIcon color='gray' size={20} />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' className='flex-1' />
        </View>
        <AdjustmentsVerticalIcon size={25} color='#00ccbb' />
      </View>
      <ScrollView 
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        <Categories />
        <FeaturedRow id='1' title='Featured' description='Paid placemets from our partners' featuredCategory='featured' />
        <FeaturedRow id='2' title='Tasty Discounts' description='Everyone´s been enjoying these juicy discounts' featuredCategory='discounts' />
        <FeaturedRow id='3' title='Offers near you' description='Why not support your local restaurant tonight?' featuredCategory='offers' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;
