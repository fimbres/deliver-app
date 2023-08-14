import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import CategoryCard from './CategoryCard';
import { Type } from '../utils/types';
import client, { urlFor } from '../utils/sanity';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Type[]>([]);

  useEffect(() => {
    client.fetch(`
      *[_type == 'category']
    `).then((data: Type[]) => {
      setCategories(data);
    });
  }, []);
  

  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >
        {categories.map(category => (
          <CategoryCard key={category._rev} text={category.title} image={{ uri: urlFor(category.image).url() }} />
        ))}
    </ScrollView>
  )
}

export default Categories;
