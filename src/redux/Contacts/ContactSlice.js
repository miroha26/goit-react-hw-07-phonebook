import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './ContactsOperations';

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = [...state.items, action.payload];
      state.error = null;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deleteContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
      state.error = null;
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
