import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (product) => {
    const cart = get().cart;
    set({ cart: [...cart, product] });
    console.log(...cart, product);
  },
}));
