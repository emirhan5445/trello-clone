import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 0,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => {
      
      state.user += 1;
    },
  }
});

export const { incrementByAmount } = userSlice.actions;

export const selectCount = (state) => state.user.user;

export default userSlice.reducer;