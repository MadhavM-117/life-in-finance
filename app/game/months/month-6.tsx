import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";
import type { RootState } from "~/redux/store";

interface Month6Props {
  next: () => void;
}

const EXPENSE_AMOUNT = 4000;

export const Month6: React.FC<Month6Props> = ({ next }) => {
  const { savings, fixedDeposit, mutualFunds, stockMarket } = useAppSelector(
    (state: RootState) => state.game,
  );
  const dispatch = useAppDispatch();

  return (
    <MonthContainer>
      <MonthTitle>Event 4: Festive Season Shopping (Month 8)</MonthTitle>
      <MonthDescriptions>
        {`Diwali is around the corner. Your friends are upgrading their wardrobes and gadgets.

Decision 6: What do you do?
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

