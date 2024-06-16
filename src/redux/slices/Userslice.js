import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedUserId: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
    
  },
});

export const { setUserId } = userSlice.actions;

export default userSlice.reducer;
