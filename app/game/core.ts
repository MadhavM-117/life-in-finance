import type { GameState } from "~/redux/slices/gameSlice";

export interface MonthlyRates {
  savings: number;
  fixedDeposit: number;
  mutualFunds: number;
  creditCardDebt: number;
}

export interface MonthlyEvent {
  month: number;
  type: keyof MonthlyRates;
  rateChange: number;
  description: string;
}

const BASE_RATES: MonthlyRates = {
  savings: 0.002, // 0.2% monthly (2.4% annual)
  fixedDeposit: 0.004, // 0.4% monthly (4.8% annual)
  mutualFunds: 0.008, // 0.8% monthly (10% annual average, but volatile)
  creditCardDebt: 0.015, // 1.5% monthly (18% annual interest charge - debt grows)
};

const MONTHLY_EVENTS: MonthlyEvent[] = [
  {
    month: 3,
    type: "mutualFunds",
    rateChange: -0.012,
    description: "Market correction affects mutual funds",
  },
  {
    month: 5,
    type: "savings",
    rateChange: 0.001,
    description: "Bank raises savings rates",
  },
  {
    month: 7,
    type: "mutualFunds",
    rateChange: 0.015,
    description: "Bull market surge",
  },
  {
    month: 11,
    type: "fixedDeposit",
    rateChange: 0.002,
    description: "Interest rate hike benefits fixed deposits",
  },
];

function getCurrentRates(monthsPassed: number): MonthlyRates {
  const rates = { ...BASE_RATES };

  MONTHLY_EVENTS.forEach((event) => {
    if (monthsPassed >= event.month) {
      rates[event.type] += event.rateChange;
    }
  });

  return rates;
}

export const getNextMonthNumbers = (
  state: GameState,
): Pick<
  GameState,
  "savings" | "fixedDeposit" | "mutualFunds" | "creditCardDebt"
> => {
  const rates = getCurrentRates(state.monthsPassed);

  return {
    savings: state.savings * (1 + rates.savings),
    fixedDeposit: state.fixedDeposit * (1 + rates.fixedDeposit),
    mutualFunds: state.mutualFunds * (1 + rates.mutualFunds),
    creditCardDebt: state.creditCardDebt * (1 + rates.creditCardDebt),
  };
};

export const getActiveEventsForMonth = (
  monthsPassed: number,
): MonthlyEvent[] => {
  return MONTHLY_EVENTS.filter((event) => event.month === monthsPassed);
};

export const getCurrentMonthlyRates = (monthsPassed: number): MonthlyRates => {
  return getCurrentRates(monthsPassed);
};
