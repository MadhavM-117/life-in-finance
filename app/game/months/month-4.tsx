import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";
import type { RootState } from "~/redux/store";

interface Month4Props {
  next: () => void;
}

const PHONE_COST = 8000;

export const Month4: React.FC<Month4Props> = ({ next }) => {
  const { savings, stockMarket, fixedDeposit, mutualFunds } = useAppSelector(
    (state: RootState) => state.game,
  );
  const dispatch = useAppDispatch();

  return (
    <MonthContainer>
      <MonthTitle>Month 4 – A new phone!</MonthTitle>
      <MonthDescriptions>
        {`You're buying a new phone worth ₹8,000. 

How do you want to purchase it?`}
      </MonthDescriptions>
      <MonthOptions>
        <button
          onClick={() => {
            dispatch(gameActions.changeSavings(savings - PHONE_COST));
            next();
          }}
        >
          A. Purchase with your savings
        </button>
        <button
          onClick={() => {
            // assuming that initial investment (month-1) > Phone cost, and gift < Phone cost.
            if (fixedDeposit > PHONE_COST)
              dispatch(
                gameActions.changeFixedDeposit(fixedDeposit - PHONE_COST),
              );
            else if (mutualFunds > PHONE_COST)
              dispatch(gameActions.changeMutualFunds(mutualFunds - PHONE_COST));
            else if (stockMarket > PHONE_COST)
              dispatch(
                gameActions.changeStockMarketInvestment(
                  stockMarket - PHONE_COST,
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

