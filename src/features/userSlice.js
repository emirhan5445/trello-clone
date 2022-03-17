import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'untitled',
  userSurname: 'hello'
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {      
        state.userName = action.payload;
    },
    setSurname: (state, action) => {      
        state.userSurname = action.payload;
    },
  }
});

export const { setName, setSurname } = userSlice.actions;

export const selectUserName = (state) => state.user.userName;
export const selectUserSurname = (state) => state.user.userSurname;

export default userSlice.reducer;