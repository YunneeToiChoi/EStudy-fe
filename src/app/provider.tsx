"use client";
import { store, persistor } from "@/lib/utils/store";
import { Provider } from "react-redux";
import { PusherProvider } from './pusherProvider';
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PusherProvider>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
            </PusherProvider>
        </Provider>
    );
}
