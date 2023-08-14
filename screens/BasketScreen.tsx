import React, { useMemo, useState } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { XCircleIcon } from 'react-native-heroicons/solid';

import { RootStackParamList } from '../App'
import { useRestaurantStore } from '../store/restaurantStore';
import { useBasketStore } from '../store/basketStore';
import { urlFor } from '../utils/sanity';
import CurrencyFormatter from '../utils/currency';

const BasketScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'BasketScreen'>> = ({ navigation }) => {
  const { restaurant } = useRestaurantStore();
  const { items, removeFromBasket, getItemQuantity, getTotalQuantity } = useBasketStore();
  const total = getTotalQuantity();

  return (
    <SafeAreaView className='flex-1 bg-white'>
        <View className='flex-1 bg-gray-100'>
            <View className='p-5 border-b border-[#00ccbb] bg-white shadow-sm'>
                <View>
                    <Text className='text-lg font-bold text-center'>Basket</Text>
                    <Text className='text-center text-gray-400'> {restaurant?.name}</Text>
                </View>
                <TouchableOpacity className='absolute top-3 right-5 bg-gray-100 rounded-full shadow-md' onPressIn={navigation.goBack}>
					<XCircleIcon size={30} color='#00ccbb' />
				</TouchableOpacity>
            </View>
            <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
                <Image source={{ uri: urlFor(restaurant?.image!).url() }} className='h-7 w-7 bg-gray-300 p-4 rounded-full'/>
                <Text>Deliver in 20 - 35 min.</Text>
                <TouchableOpacity>
                    <Text className='text-[#00ccbb]'>Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView className='divide-y divide-gray-200'>
                {items.map((data, key) => (
                    <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                        <Text>{getItemQuantity(data.dish._id)} x</Text>
                        <Image source={{ uri: urlFor(data.dish.image).url() }} className='w-12 h-12 rounded-full' />
                        <Text className='flex-1'>{data.dish.name}</Text>
                        <Text className='text-gray-600'>
                            {CurrencyFormatter(data.dish.price * data.quantity)}
                        </Text>
                        <TouchableOpacity>
                            <Text className='text-[#00ccbb] text-xs' onPressIn={() => removeFromBasket(data.dish)}>
                                Discount
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <View className='p-5 bg-white mt-5 space-y-4'>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-400'>Subtotal</Text>
                    <Text className='text-gray-400'>{CurrencyFormatter(total)}</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-400'>Delivery Fee</Text>
                    <Text className='text-gray-400'>{CurrencyFormatter(6.99)}</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='font-extrabold'>Total</Text>
                    <Text className='font-extrabold'>{CurrencyFormatter(total + 6.99)}</Text>
                </View>
                <TouchableOpacity className='rounded-lg bg-[#00ccbb] p-4'>
                    <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen