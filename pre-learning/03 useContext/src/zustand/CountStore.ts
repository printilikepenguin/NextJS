import { create } from "zustand";

type CountStore = {
  count: number;
  increment: () => void;
  remove: () => void;
};
export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  // 콜백함수형태로 보내주거나
  increment: () => set((state) => ({ count: state.count + 1 })),
  // 객체값 날려주덩가
  remove: () => set({ count: 0 }),
}));
