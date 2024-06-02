import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import authReducer from "./authSlices";
import userReducer from "./userSlice";
import courseReducer from "./courseSlices";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
};
const rootReducer = combineReducers({ auth: authReducer, users: userReducer});
const ThunkReducer = combineReducers({courses: courseReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {persistedReducer,ThunkReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export const persistor = persistStore(store);