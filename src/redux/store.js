import {configureStore} from '@reduxjs/toolkit';

import gameSlice from './slices/gameSlice.js';
const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export default store;