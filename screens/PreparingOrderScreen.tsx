import React, { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';

const PreparingOrderScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'PreparingOrderScreen'>> = ({ navigation }) => {
    useEffect(() => {
      const timeoutId = setInterval(() => {
        navigation.navigate('DeliveryOrderScreen');
      }, 5000);
    
      return () => {
        clearInterval(timeoutId);
      }
    }, []);
  
    return (
    <SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
        <Animatable.Image 
            source={require('../assets/delivery.gif')}
            animation='slideInUp'
            iterationCount={1}
            className='h-80 w-80'
        />
        <Animatable.Text animation='slideInUp' iterationCount={1} className='text-xl my-10 text-white font-bold text-center'>
            Waiting for Restaurant to accept your order!
        </Animatable.Text>
        <Progress.Bar indeterminate={true} color='white' accessibilityIgnoresInvertColors />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen