import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, SafeAreaView, Text, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../utils/sanity';
import { FeaturedSection } from '../utils/types';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState<FeaturedSection[]>([]);

  useEffect(() => {
    client.fetch(`
      *[_type == 'featured'] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] ->,
          type ->
        }
      }
    `).then((data: FeaturedSection[]) => {
      setFeaturedCategories(data.reverse());
    });
  }, []);
  
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
        
        {featuredCategories?.map(category => (
          <FeaturedRow key={category._id} id={category._id} title={category.name} description={category.short_description} restaurants={category.restaurants} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;
