import { RootState } from "@/Redux/sotre";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitializeState {
  tasks: ITask[];
  filter: "all" | "Low" | "Medium" | "High";
}

const initialState: InitializeState = {
  tasks: [
    {
      id: "01",
      title: "Initialize Fronend",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
