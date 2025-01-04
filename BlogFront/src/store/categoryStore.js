import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCategoryStore = create(
  persist(
    (set) => ({
      selectedCategory: "All",

      setCategory: (categoryName) => set({ selectedCategory: categoryName }),

      clearCategory: () => set({ selectedCategory: null }),
    }),
    {
      name: "category-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCategoryStore;
