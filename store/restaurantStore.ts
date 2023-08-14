import { create } from 'zustand';

import { Restaurant } from '../utils/types';

interface RestaurantStore {
    restaurant: Restaurant | null;
    setRestaurant: (restaurant: Restaurant) => void;
    resetRestaurant: () => void;
};

export const useRestaurantStore = create<RestaurantStore>(set => ({
    restaurant: null,
    setRestaurant: restaurant => set({ restaurant }),
    resetRestaurant: () => set({ restaurant: null })
}));
