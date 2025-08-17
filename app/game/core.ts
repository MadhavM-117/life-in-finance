import type { GameState } from "~/redux/slices/gameSlice";

export interface MonthlyRates {
  savings: number;
  fixedDeposit: number;
  mutualFunds: number;
  stockMarket: number;
}

const BASE_RATES: MonthlyRates = {
  savings: 0.0,
  fixedDeposit: 0.004, // 0.4% monthly (4.8% annual)
  mutualFunds: 0.008, // 0.8% monthly (10% annual average, but volatile)
  stockMarket: 0.01, // 1% Monthly (12% annual leverage, but volatile)
};

const HIKED_REPO_RATE = {
  ...BASE_RATES,
  fixedDeposit: 0.0055, // 0.55% monthly (6.8% annual)
  mutualFunds: -0.0133, // -4% over the 3 month period
  stockMarket: -0.0266, // -8% over the 3 month period
};

const RATE_OVERRIDE: Record<number, MonthlyRates> = {
  3: HIKED_REPO_RATE,
  4: HIKED_REPO_RATE,
  5: HIKED_REPO_RATE,
};

function getCurrentRates(monthsPassed: number): MonthlyRates {
  return RATE_OVERRIDE[monthsPassed] || BASE_RATES;
}

export const getNextMonthNumbers = (
  state: GameState,
): Pick<
  GameState,
  "savings" | "fixedDeposit" | "mutualFunds" | "stockMarket"
> => {
  const rates = getCurrentRates(state.monthsPassed);

  return {
    savings: state.savings * (1 + rates.savings),
    fixedDeposit: state.fixedDeposit * (1 + rates.fixedDeposit),
    mutualFunds: state.mutualFunds * (1 + rates.mutualFunds),
    stockMarket: state.stockMarket * (1 + rates.stockMarket),
  };
};
