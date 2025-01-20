import { create } from 'zustand';

interface CalendarState {
  isOpen: boolean;
  openCalendar: () => void;
  closeCalendar: () => void;
}

export const useCalendarStore = create<CalendarState>((set) => ({
  isOpen: false,
  openCalendar: () => set({ isOpen: true }),
  closeCalendar: () => set({ isOpen: false }),
}));