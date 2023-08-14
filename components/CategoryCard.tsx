import React from 'react'
import { Text, ImageSourcePropType, Image, TouchableOpacity } from 'react-native'

interface CategoryCardProps {
    text: string;
    image: ImageSourcePropType;
    onPress?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ text, image, onPress }) => {
  return (
    <TouchableOpacity onPressIn={onPress} className='relative mr-2'>
      <Image source={image} className='h-20 w-44 rounded'/>
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{text}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard