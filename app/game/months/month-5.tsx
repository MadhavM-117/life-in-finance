import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";
import type { RootState } from "~/redux/store";

interface Month5Props {
  next: () => void;
}

export const Month5: React.FC<Month5Props> = ({ next }) => {
  const { savings, stockMarket, mutualFunds, fixedDeposit } = useAppSelector(
    (state: RootState) => state.game,
  );
  const dispatch = useAppDispatch();

  return (
    <MonthContainer>
      <MonthTitle>Event 3: Gold Rally (Month 6)</MonthTitle>
      <MonthDescriptions>
        {`📈 Headline: "Gold prices rise as global uncertainty spooks investors."

The markets are changing.

Decision 5: What do you do? 
`}
      </MonthDescriptions>
      <MonthOptions>
        <button
          onClick={() => {
            dispatch(
              gameActions.changeFixedDeposit(
                fixedDeposit + stockMarket + mutualFunds,
              ),
            );
            dispatch(gameActions.changeMutualFunds(0));
            dispatch(gameActions.changeStockMarketInvestment(0));
            next();
          }}
        >
          A. Move funds into FDs
        </button>
        <button
          onClick={() => {
            dispatch(gameActions.changeFixedDeposit(0));
            dispatch(gameActions.changeMutualFunds(0));
            dispatch(
              gameActions.changeStockMarketInvestment(
                fixedDeposit + stockMarket + mutualFunds,
              ),
            );
            next();
          }}
        >
          B. Move to Stocks
        </button>
        <button
          onClick={() => {
            dispatch(gameActions.changeFixedDeposit(0));
            dispatch(
              gameActions.changeMutualFunds(
                fixedDeposit + stockMarket + mutualFunds,
              ),
            );
            dispatch(gameActions.changeStockMarketInvestment(0));
            next();
          }}
        >
          C. Move to Mutual Funds
        </button>
      </MonthOptions>
    </MonthContainer>
  );
};
