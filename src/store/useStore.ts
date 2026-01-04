import { create } from "zustand";
import type { Language } from "../types/Job";

interface Store {
  language: Language;
  category: string;
  setLanguage: (lang: Language) => void;
  setCategory: (cat: string) => void;
}

export const useStore = create<Store>((set) => ({
  language: "en",
  category: "",
  setLanguage: (lang: Language) => set({ language: lang }),
  setCategory: (cat: string) => set({ category: cat }),
}));
