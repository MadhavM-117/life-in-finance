import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";
import type { RootState } from "~/redux/store";

interface Month7Props {
  next: () => void;
}

const EXPENSE_AMOUNT = 10_000;

export const Month7: React.FC<Month7Props> = ({ next }) => {
  const { savings, fixedDeposit, mutualFunds, stockMarket } = useAppSelector(
    (state: RootState) => state.game,
  );
  const dispatch = useAppDispatch();

  return (
    <MonthContainer>
      <MonthTitle>Month 10 – Emergency Expense</MonthTitle>
      <MonthDescriptions>
        {`Your bike breaks down. You need ₹10,000 for repairs.

Decision 7: How do you arrange it?
`}
      </MonthDescriptions>
      <MonthOptions>
        <button
          onClick={() => {
            dispatch(gameActions.changeSavings(savings - EXPENSE_AMOUNT));
            next();
          }}
        >
          A. Purchase with your savings
        </button>
        <button
          onClick={() => {
            // assuming that initial investment (month-1) > Phone cost, and gift < Phone cost.
            if (fixedDeposit > EXPENSE_AMOUNT)
              dispatch(
                gameActions.changeFixedDeposit(fixedDeposit - EXPENSE_AMOUNT),
              );
            else if (mutualFunds > EXPENSE_AMOUNT)
              dispatch(
                gameActions.changeMutualFunds(mutualFunds - EXPENSE_AMOUNT),
              );
            else if (stockMarket > EXPENSE_AMOUNT)
              dispatch(
                gameActions.changeStockMarketInvestment(
                  stockMarket - EXPENSE_AMOUNT,
                ),
              );

            next();
          }}
        >
          B. Re-distribute from investments
        </button>
      </MonthOptions>
    </MonthContainer>
  );
};

