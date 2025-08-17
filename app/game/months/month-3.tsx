import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";
import type { RootState } from "~/redux/store";

interface Month3Props {
  next: () => void;
}

export const Month3: React.FC<Month3Props> = ({ next }) => {
  const { stockMarket, fixedDeposit, mutualFunds } = useAppSelector(
    (state: RootState) => state.game,
  );
  const dispatch = useAppDispatch();

  return (
    <MonthContainer>
      <MonthTitle>Event 2: RBI Hikes Repo Rate (Month 3)</MonthTitle>
      <MonthDescriptions>
        {`📈 Headline: "RBI raises repo rate to control inflation. FD rates rise, stock market dips. Mutual Funds may benefit."

💡 Groww Tip: When interest rates go up, mutual funds may become attractive while stocks can take a hit.

Decision 3 (Month 3): What do you do with your current investments?`}
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

