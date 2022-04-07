import { combineReducers } from 'redux';
import darkModeReducer from './slices/dark-mode/dark-mode';
import filesReduer from './slices/files/files';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
  files: filesReduer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;
