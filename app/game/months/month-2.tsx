import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";
import type { RootState } from "~/redux/store";

interface Month2Props {
  next: () => void;
}

export const Month2: React.FC<Month2Props> = ({ next }) => {
  const { savings, stockMarket, fixedDeposit, mutualFunds } = useAppSelector(
    (state: RootState) => state.game,
  );
  const dispatch = useAppDispatch();

  return (
    <MonthContainer>
      <MonthTitle>Month 2 – Grandma's Gift</MonthTitle>
      <MonthDescriptions>
        {`You receive a gift from your grandma of ₹5,000.

Decision 2: Where do you put it?`}
      </MonthDescriptions>
      <MonthOptions>
        <button
          onClick={() => {
            dispatch(gameActions.changeSavings(savings + 5000));
            next();
          }}
        >
          A. Keep in Bank Savings
        </button>
        <button
          onClick={() => {
            dispatch(
              gameActions.changeStockMarketInvestment(stockMarket + 5000),
            );
            next();
          }}
        >
          B. Invest in Stock Market
        </button>

        <button
          onClick={() => {
            dispatch(gameActions.changeFixedDeposit(fixedDeposit + 5000));
            next();
          }}
        >
          C. Save with Fixed Deposit
        </button>

        <button
          onClick={() => {
            dispatch(gameActions.changeMutualFunds(mutualFunds + 5000));
            next();
          }}
        >
          D. Invest in Mutual Funds
        </button>
      </MonthOptions>
    </MonthContainer>
  );
};

