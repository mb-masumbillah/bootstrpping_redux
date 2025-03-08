import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counterSlice";
// import longer from "./middleware/logger";
import TaskReducer from "./features/Task/TaskSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: TaskReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(longer),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
