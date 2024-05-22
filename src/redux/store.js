import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './constactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
