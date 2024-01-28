import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        elem => elem.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
