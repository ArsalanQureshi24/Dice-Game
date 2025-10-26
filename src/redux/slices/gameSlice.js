import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    guessedNumber: null,
    diceNumber: null,
    totalScore: 0,
    showRules : false,
  },
  reducers: {
    guessNumber: (state, action) => {
        state.guessedNumber = action.payload;
    },
    diceNumber: (state, action) => {
        state.diceNumber = action.payload;
    },
    updateScore: (state) => {
      if(state.guessedNumber == state.diceNumber){ 
        state.totalScore = state.totalScore + Number(state.guessedNumber);
      } else {
        state.totalScore = state.totalScore - 2
      }
    },
    resetGuessNumber: (state) => {
        state.guessedNumber = null;
    },
    resetScore: (state) => {
        state.totalScore = 0;
    },
    markShowRules: (state) => {
        state.showRules = !state.showRules;
    },

    },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
