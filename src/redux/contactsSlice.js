import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { addContactThunk, getContacts, deleteContactThunk } from './operations';

const handlePending = ({ contacts }) => {
  contacts.error = null;
  contacts.isLoading = true;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.error = payload;
  contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.fulfilled, ({ contacts }, { payload }) => {
        contacts.items = payload;
        contacts.isLoading = false;
      })
      .addCase(getContacts.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, ({ contacts }, { payload }) => {
        contacts.items.push(payload);
        contacts.isLoading = false;
      })
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, ({ contacts }, { payload }) => {
        contacts.items = contacts.items.filter(item => item.id !== payload.id);
        contacts.isLoading = false;
      })
      .addCase(deleteContactThunk.rejected, handleRejected),
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
