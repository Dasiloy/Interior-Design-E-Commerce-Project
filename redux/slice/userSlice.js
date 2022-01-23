import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  userId: null,
  username: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state) {
      state.userId = uuid();
    },
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
