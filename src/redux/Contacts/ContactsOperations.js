import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64550a19f803f345763893ee.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await axios.get('/contacts/contacts');
  return contacts.data;
});
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const contacts = await axios.post('/contacts/contacts', contact);
    return contacts.data;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`/contacts/contacts/${id}`);
    return id;
  }
);
