"use client";
import { Provider } from "react-redux";
import {persistor, store} from "@/app/(redux)/store";
import {PersistGate} from "redux-persist/integration/react";

export function Providers({ children }) {
    return <Provider store={store}><PersistGate persistor={persistor}>{children}</PersistGate></Provider>;
}