import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getNextMonthNumbers } from "~/game/core";

export interface GameState {
  savings: number;
  fixedDeposit: number;
  mutualFunds: number;
  stockMarket: number;
  monthsPassed: number;
  isVisible: {
    savings: boolean;
    fixedDeposit: boolean;
    mutualFunds: boolean;
    stockMarket: boolean;
  };
}

const initialState: GameState = {
  savings: 0,
  fixedDeposit: 0,
  mutualFunds: 0,
  stockMarket: 0,
  monthsPassed: 0,
  isVisible: {
    savings: true,
    fixedDeposit: false,
    mutualFunds: false,
    stockMarket: false,
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
    changeStockMarketInvestment: (state, action: PayloadAction<number>) => {
      state.stockMarket = action.payload;
      state.isVisible.stockMarket = true;
    },
    moveForwardInTime: (state, action: PayloadAction<number>) => {
      state.monthsPassed += action.payload;
    },
    processMonthlyCalculations: (state) => {
      const newBalances = getNextMonthNumbers(state);
      state.savings = Math.round(newBalances.savings * 100) / 100;
      state.fixedDeposit = Math.round(newBalances.fixedDeposit * 100) / 100;
      state.mutualFunds = Math.round(newBalances.mutualFunds * 100) / 100;
      state.stockMarket = Math.round(newBalances.stockMarket * 100) / 100;
      state.monthsPassed += 1;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const gameActions = gameSlice.actions;
