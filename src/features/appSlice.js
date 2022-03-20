import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boardId: null,
  boardName: null
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    selectboardId: (state, action) => {
      
      state.app = action.payload;
    },
  }
});

export const { selectboardId } = appSlice.actions;

export const selectBoardId = (state) => state.app.boardId;
export const selectBoardName = (state) => state.app.boardName;

export default appSlice.reducer;