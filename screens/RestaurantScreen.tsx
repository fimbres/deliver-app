import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { ArrowLeftIcon, QuestionMarkCircleIcon, ChevronRightIcon } from 'react-native-heroicons/outline';

import { RootStackParamList } from '../App'
import { urlFor } from '../utils/sanity';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

const RestaurantScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'RestaurantScreen'>>  = ({ navigation, route }) => {
  const { image, name, type, rating, address, short_description, dishes } = route.params.restaurant;

  return (
	<>
		<ScrollView>
			<View className='relative h-56'>
				<Image source={{ uri: urlFor(image).url() }} className='absolute w-full h-56 bg-gray-300 p-4' />
				<TouchableOpacity className='absoulute top-12 left-5 bg-gray-100 rounded-full w-10 h-10 items-center justify-center shadow-md' onPressIn={navigation.goBack}>
					<ArrowLeftIcon size={20} color='#00ccbb' />
				</TouchableOpacity>
			</View>
			<View className='bg-white'>
				<View className='px-3 pt-4'>
					<Text className='text-3xl font-bold'>{name}</Text>
					<View className='flex-row space-x-2 my-1'>
						<View className='flex-row items-center space-x-2'>
							<StarIcon color='green' size={22} opacity={0.5} />
							<Text className='text-xs text-gray-500'>
								<Text className='text-green-500'>{rating}</Text> - {type.title}
							</Text>
						</View>
						<View className='flex-row items-center space-x-2'>
							<MapPinIcon color='gray' size={22} opacity={0.5} />
							<Text className='text-xs text-gray-500'>
								<Text className='text-gray-500 truncate'>Nearby: {address}</Text>
							</Text>
						</View>
					</View>
					<Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
				</View>
				<TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
					<QuestionMarkCircleIcon color='gray' size={20} opacity={0.5} />
					<Text>Have a food allergy?</Text>
					<ChevronRightIcon color='#00ccbb' />
				</TouchableOpacity>
			</View>
			<View className='pb-36'>
				<Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
				{dishes?.map(dish => (
					<DishRow key={dish._id} dish={dish} />
				))}
			</View>
		</ScrollView>
		<BasketIcon onPress={() => navigation.navigate('BasketScreen')}/>
	</>
  )
}

export default RestaurantScreen
