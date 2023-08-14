import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard';

const url = 'https://img.freepik.com/free-photo/flat-lay-assortment-with-delicious-brazilian-food_23-2148739179.jpg?w=1800&t=st=1691970982~exp=1691971582~hmac=cebe7ccec50ceaf0a43848a8d216e6c9adf1755386b886f37daeb5084475ceff';

const Categories: React.FC = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
        <CategoryCard image={{ uri: url}} text='testing'/>
        <CategoryCard image={{ uri: url}} text='testing'/>
        <CategoryCard image={{ uri: url}} text='testing'/>
        <CategoryCard image={{ uri: url}} text='testing'/>
        <CategoryCard image={{ uri: url}} text='testing'/>
        <CategoryCard image={{ uri: url}} text='testing'/>
        <CategoryCard image={{ uri: url}} text='testing'/>
    </ScrollView>
  )
}

export default Categories;
