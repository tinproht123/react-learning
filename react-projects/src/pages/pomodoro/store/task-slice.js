import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        id: "4843fff5-c63a-4a7b-b54e-e5c6aab608e4",
        name: "Learning",
        finished: false,
        totalPomos: 3,
        finishedPomos: 0,
        note: "",
        isRunning: true,
      },
    ],
    taskOrder: 1,
    status: "Pomodoro",
    progress: 0,
  },
  reducers: {
    updateStatus(state, action) {
      state.status = action.payload.status;
    },
    updateProgress(state, action) {
      state.progress = action.payload.progress;
    },
    saveNewTask(state, action) {
      state.tasks.push(action.payload.newTask);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    deleteAllTask(state) {
      state.tasks = [];
    },
    deleteFinishedTasks(state) {
      state.tasks = state.tasks.filter((task) => task.finished === false);
    },
    updateTask(state, action) {
      const checkTask = state.tasks.find(
        (item) => item.id === action.payload.id
      );
      const index = state.tasks.indexOf(checkTask);
      state.tasks.splice(index, 1);
      state.tasks.splice(index, 0, action.payload.updatedTask);
    },
    runTask(state, action) {
      state.tasks.map((task) => {
        if (task.id === action.payload.id) task.isRunning = true;
        else task.isRunning = false;
      });
    },
  },
});

export default taskSlice.reducer;
export const {
  updateStatus,
  updateProgress,
  saveNewTask,
  updateTask,
  runTask,
  deleteTask,
  deleteAllTask,
  deleteFinishedTasks,
} = taskSlice.actions;
