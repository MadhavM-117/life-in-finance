import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  savings: number;
  fixedDeposit: number;
  mutualFunds: number;
  creditCardDebt: number;
  monthsPassed: number;
  isVisible: {
    savings: boolean;
    fixedDeposit: boolean;
    mutualFunds: boolean;
    creditCardDebt: boolean;
  };
}

const initialState: GameState = {
  savings: 0,
  fixedDeposit: 0,
  mutualFunds: 0,
  creditCardDebt: 0,
  monthsPassed: 0,
  isVisible: {
    savings: true,
    fixedDeposit: false,
    mutualFunds: false,
    creditCardDebt: false,
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeSavings: (state, action: PayloadAction<number>) => {
      state.savings = action.payload;
    },
    changeFixedDeposit: (state, action: PayloadAction<number>) => {
      state.fixedDeposit = action.payload;
      state.isVisible.fixedDeposit = true;
    },
    changeMutualFunds: (state, action: PayloadAction<number>) => {
      state.mutualFunds = action.payload;
      state.isVisible.mutualFunds = true;
    },
    changeCreditCardDebt: (state, action: PayloadAction<number>) => {
      state.creditCardDebt = action.payload;
      state.isVisible.creditCardDebt = true;
    },
    moveForwardInTime: (state, action: PayloadAction<number>) => {
      state.monthsPassed += action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;
