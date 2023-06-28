import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        id: 1,
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
  },
  reducers: {
    updateStatus(state, action) {
      state.status = action.payload.status;
    },
  },
});

export default taskSlice.reducer;
export const { updateStatus } = taskSlice.actions;
