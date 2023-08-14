import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

import { Dish } from '../utils/types'
import CurrencyFormatter from '../utils/currency';
import { urlFor } from '../utils/sanity';
import { useBasketStore } from '../store';

interface DishRowProps {
    dish: Dish;
}

const DishRow: React.FC<DishRowProps> = ({ dish }) => {
  const { image, name, description, price, rating } = dish;
  const [isPressed, setIsPressed] = useState(false);
  const { addToBasket, removeFromBasket, getItemQuantity } = useBasketStore();
  const quantity = getItemQuantity(dish._id);

  return (
    <>
      <TouchableOpacity className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`} onPressIn={() => setIsPressed(!isPressed)}>
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
              <Text className='text-lg mb-1'>{name}</Text>
              <Text className='text-gray-400'>
                  {description} -
                  <Text className='text-green-500'> {rating} ☆</Text>
              </Text>
              <Text className='text-gray-400 mt-2'>
                  {CurrencyFormatter(price)}
              </Text>
          </View>
          <View>
              <Image source={{ uri: urlFor(image).url() }} style={{ borderWidth: 1, borderColor: 'gray'}} className='h-20 w-20 bg-gray-300 p-4 rounded' />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity onPressIn={() => removeFromBasket(dish)} disabled={quantity === 0} style={{ opacity: quantity === 0 ? 0.5 : 1 }}>
              <MinusCircleIcon size={40} color='gray' />
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPressIn={() => addToBasket(dish)}>
              <PlusCircleIcon size={40} color='green' />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow