import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boardId: null,
  boardName: null
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    logIn: (state) => {
      
      state.app += 1;
    },
  }
});

export const { logIn } = appSlice.actions;

export const selectboardId = (state) => state.app.boardId;
export const selectBoardName = (state) => state.app.boardName;

export default appSlice.reducer;