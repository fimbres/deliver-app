import { create } from 'zustand';

import { Dish } from '../utils/types';

interface Item {
    dish: Dish;
    quantity: number;
}

interface BasketStore {
    items: Item[];
    getTotalQuantity: () => number;
    getItemQuantity: (id: string) => number;
    addToBasket: (item: Dish) => void;
    removeFromBasket: (item: Dish) => void;
};

export const useBasketStore = create<BasketStore>((set, get) => ({
    items: [],
    getTotalQuantity: () => get().items.reduce((total, item) => total += (item.dish.price * item.quantity), 0),
    getItemQuantity: (id) => get().items.find(i => i.dish._id === id)?.quantity || 0,
    addToBasket: (item) => {
        const items = [...get().items];
        const itemPosition = items.findIndex(i => i.dish.name === item.name);

        if(itemPosition === -1) {
            const newItem = { dish: item, quantity: 1 };

            set({ items: [...items, newItem] });
        }
        else {
            items[itemPosition].quantity += 1;

            set({ items });
        }
    },
    removeFromBasket: (item) => {
        const items = [...get().items];
        const itemPosition = items.findIndex(i => i.dish.name === item.name);

        if(itemPosition === -1){
            return;
        }
        else if(items[itemPosition].quantity === 1) {
            items.splice(itemPosition, 1);

            set({ items });
        }
        else {
            items[itemPosition].quantity -= 1;

            set({ items });
        }
    }
}));
