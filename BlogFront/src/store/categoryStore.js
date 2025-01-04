import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCategoryStore = create(
  persist(
    (set) => ({
      selectedCategory: "0",

      setCategory: (categoryId) => set({ selectedCategory: categoryId }),

      clearCategory: () => set({ selectedCategory: null }),
    }),
    {
      name: "category-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCategoryStore;
