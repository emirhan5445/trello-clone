import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boardId: null,
  boardName: null
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setBoardInfo: (state, action) => {
      state.boardId = action.payload.boardId;
      state.boardName = action.payload.boardName;
    },
  }
});

export const { setBoardInfo } = appSlice.actions;

export const selectBoardId = (state) => state.app.boardId;
export const selectBoardName = (state) => state.app.boardName;

export default appSlice.reducer;