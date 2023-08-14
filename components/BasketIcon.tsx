import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useBasketStore } from '../store'
import CurrencyFormatter from '../utils/currency';

interface BasketIconProps {
  onPress: () => void;
}

const BasketIcon: React.FC<BasketIconProps> = ({ onPress }) => {
  const { items, getTotalQuantity } = useBasketStore();
  const total = getTotalQuantity();

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity className='mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg bg-[#01a296] py-1 px-2'>
          {items.length}
        </Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>
          View Basket
        </Text>
        <Text className='text-lg text-white font-extrabold'>
          {CurrencyFormatter(total)}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon