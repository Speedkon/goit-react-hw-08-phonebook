import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, {rejectWithValue}) => {

        try {
            const contacts = await axios.get("/contacts");
            return contacts.data;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const addNewContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, {rejectWithValue}) => {

        try {
            const response = await axios.post("/contacts", newContact);
            return response.data;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContact",
    async (id, {rejectWithValue}) => {

        try {
            const deleted = await axios.delete(`/contacts/${id}`);
            return deleted.data;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)