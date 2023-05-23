import { configureStore } from '@reduxjs/toolkit';
import { Filter } from './Filter/FilterSlice';
import { ContactSlice } from './Contacts/ContactSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactSlice.reducer,
    filter: Filter.reducer,
  },
});
