import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  totalMoney: number;
  monthsPassed: number;
}

const initialState: GameState = {
  totalMoney: 0,
  monthsPassed: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setMoney: (state, action: PayloadAction<number>) => {
      state.totalMoney = action.payload;
    },
    setMonthsPassed: (state, action: PayloadAction<number>) => {
      state.monthsPassed = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;
