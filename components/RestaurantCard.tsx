import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid';

interface RestaurantCardProps {
    id: string;
    imageUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    shortDescription: string;
    dishes: number;
    long: number;
    lat: number;
    onPress: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
    id,
    imageUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat,
    onPress,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow' onPress={onPress}>
      <Image source={{ uri: imageUrl }} className='h-36 w-56 rounded-sm'/>
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
            <StarIcon color='green' opacity={0.5} size={22} />
            <Text className='text-xs text-gray-400'>
                <Text className='text-green-500'>{rating}</Text> - {genre}
            </Text>
        </View>
        <View className='flex-row items-center space-x-1 w-48'>
            <MapPinIcon color='gray' opacity={0.5} size={22} />
            <Text className='text-xs text-gray-500 text-ellipsis'>Nearby: {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard