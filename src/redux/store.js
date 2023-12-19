import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from './contacts/contactSlice';
import { filterReducer } from "./filterSlice";
import { authReducer } from "./auth/slice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
