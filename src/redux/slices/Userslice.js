import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  users: data,
  activeUserId: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUserId(state, action) {
      state.activeUserId = action.payload;
    },
    updateUnreadCount(state, action) {
      const { userId, unreadCount } = action.payload;
      const updateduser = state.users.map((user) =>
        user.userId === userId ? { ...user, unreadCount } : user
      );
      state.users = updateduser
      console.log(updateduser,"shhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    },
  },
});

export const { setActiveUserId, updateUnreadCount } = userSlice.actions;

export default userSlice.reducer;
