import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import appReducer from './appSlice';
import { boredApi } from './services';

export const store = configureStore({
  reducer: {
    app: appReducer,
    [boredApi.reducerPath]: boredApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boredApi.middleware),
})

setupListeners(store.dispatch)