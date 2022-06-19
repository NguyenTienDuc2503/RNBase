import {configureStore} from '@reduxjs/toolkit';
import DebugConfig from '@src/config/DebugConfig';
import Reactotron from '@src/config/ReactotronConfig';

import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import RootReducer from './rootReducer';

const enhancers = DebugConfig.reactotron ? [Reactotron.createEnhancer!()] : [];

const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  enhancers,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
