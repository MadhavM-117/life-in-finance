import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";
import type { RootState } from "~/redux/store";

interface Month1Props {
  next: () => void;
}

export const Month1: React.FC<Month1Props> = ({ next }) => {
  const { savings, stockMarket, fixedDeposit, mutualFunds } = useAppSelector(
    (state: RootState) => state.game,
  );
  const dispatch = useAppDispatch();

  return (
    <MonthContainer>
      <MonthTitle>Month 1: Union Budget</MonthTitle>
      <MonthDescriptions>
        {`📈 News Headline: "Government announces a major infrastructure push. Experts expect infra sector stocks to rise."
        
💡 Groww Tip: Stocks can give high returns, but they carry higher risk than FDs or Mutual Funds.

Decision 1 (Month 1): What do you do with ₹10,000 from your salary?`}
      </MonthDescriptions>
      <MonthOptions>
        <button
          onClick={() => {
            dispatch(gameActions.changeSavings(savings - 10000));
            dispatch(
              gameActions.changeStockMarketInvestment(stockMarket + 10000),
            );
            next();
          }}
        >
          A. Buy Infra Stocks
        </button>
        <button
          onClick={() => {
            dispatch(gameActions.changeSavings(savings - 10000));
            dispatch(gameActions.changeFixedDeposit(fixedDeposit + 10000));
            next();
          }}
        >
          B. Put in FD
        </button>
        <button
          onClick={() => {
            dispatch(gameActions.changeSavings(savings - 10000));
            dispatch(gameActions.changeMutualFunds(mutualFunds + 10000));
            next();
          }}
        >
          C. Invest in an Equity Mutual Fund
        </button>
      </MonthOptions>
    </MonthContainer>
  );
};
