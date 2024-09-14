import { create } from 'zustand'

const CATEGORIES = ["All","tech","health","fitness","sport","education"]

type StateType = {
    data: string[];
    updateCategoriesOptions: (options: string[]) => void;
  };

  export const useOptionStore = create<StateType>((set) => ({
    data: CATEGORIES,
    // Correctly set the data using the setter function
    updateCategoriesOptions: (options: string[]) => set(() => ({ data: options })),
  }));