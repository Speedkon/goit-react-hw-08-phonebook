import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await axios.get("/contacts");
            return data;

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
            return response;

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
            return deleted;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)