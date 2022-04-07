import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import persistedReducer from './root-reducer';

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: { ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE] },
    }),
});

export const persistor = persistStore(store);

export default store;
