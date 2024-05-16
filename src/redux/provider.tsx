"use client";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";

import Header from "@/components/handicraft/partialView/header";
import Footer from "@/components/handicraft/partialView/footer";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Header />
                    <div className="content">
                        {children}
                    </div>
                    <Footer />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}
