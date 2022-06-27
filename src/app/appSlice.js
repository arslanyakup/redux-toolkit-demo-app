import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash';

const initialState = {
  favoriteBoredList: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addBoredToFavorites: (state, action) => {
      state.favoriteBoredList.push({ ...action.payload, done: false });
    },
    deleteBoredItem: (state, action) => {
      const activity = action.payload;
      _.remove(state.favoriteBoredList, { activity })
    },
    changeDoneStatus: (state, action) => {
      const activity = action.payload;
      const findBoredItem = _.findLast(state.favoriteBoredList, { activity });
      if (findBoredItem) {
        findBoredItem.done = !findBoredItem.done;
      }
    }
  },
})

export const {
  addBoredToFavorites,
  deleteBoredItem,
  changeDoneStatus
} = appSlice.actions

export default appSlice.reducer