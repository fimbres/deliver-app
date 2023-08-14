import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import { Restaurant } from '../utils/types';
import { urlFor } from '../utils/sanity';

interface FeaturedRowProps {
    id: string;
    title: string;
    description: string;
    restaurants: Restaurant[];
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({ id, title, description, restaurants }) => {
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
        {restaurants?.map(restaurant => (
          <RestaurantCard key={restaurant._rev} id={restaurant._id} imageUrl={urlFor(restaurant.image).url()} title={restaurant.name} rating={restaurant.rating} genre={restaurant.type.title} address={restaurant.address} shortDescription={restaurant.short_description} dishes={restaurant.dishes.length} long={restaurant.lng} lat={restaurant.lat} />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow