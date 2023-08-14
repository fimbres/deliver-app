import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

interface FeaturedRowProps {
    id: string;
    title: string;
    description: string;
    featuredCategory: string;
}

const harcodedUrl = 'https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?w=1800&t=st=1691972592~exp=1691973192~hmac=2eb3475c63a11f9589c457ec6ddd91fc8509550ddc7ffbf063c35a4659405ebe';

const FeaturedRow: React.FC<FeaturedRowProps> = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00ccbb' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        <RestaurantCard id='er' title='Hado´s' imageUrl={harcodedUrl} rating={3.5} genre='Japanese' address='123 Main 51' shortDescription='This is a test' dishes={4} long={3} lat={4}  />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow