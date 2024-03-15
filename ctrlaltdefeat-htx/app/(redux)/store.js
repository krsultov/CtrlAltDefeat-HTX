"use client"
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import userReducer from "@/app/(redux)/user/userSlice"
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistingReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistingReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persistor = persistStore(store);