import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./action/movie";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Action } from "redux";
import { useDispatch } from "react-redux";

export function makeStore() {
  return configureStore({
    reducer: {
      movies: useReducer
    },
    
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

