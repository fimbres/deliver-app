import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Restaurant } from "./utils/types";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryOrderScreen from "./screens/DeliveryOrderScreen";

export type RootStackParamList = {
  HomeScreen: undefined;
  RestaurantScreen: { restaurant: Restaurant };
  BasketScreen: undefined;
  PreparingOrderScreen: undefined;
  DeliveryOrderScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BasketScreen" component={BasketScreen} options={{ headerShown: false, presentation: 'modal' }} />
        <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{ headerShown: false, presentation: 'fullScreenModal' }} />
        <Stack.Screen name="DeliveryOrderScreen" component={DeliveryOrderScreen} options={{ headerShown: false, presentation: 'fullScreenModal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
