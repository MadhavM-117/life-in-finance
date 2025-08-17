import type { GameState } from "~/redux/slices/gameSlice";

export const getNextMonthNumbers = (
  state: GameState,
): Pick<
  GameState,
  "savings" | "fixedDeposit" | "mutualFunds" | "creditCardDebt"
> => {
  return {
    savings: 0,
    fixedDeposit: 0,
    mutualFunds: 0,
    creditCardDebt: 0,
  };
};
