import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";

interface Month1Props {
  next: () => void;
}

export const Month1: React.FC<Month1Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleInvestment = (choice: string, amount: number) => {
    dispatch(gameActions.setMoney(amount));
    next();
  };

  return (
    <MonthContainer>
      <MonthTitle>Month 1: Union Budget</MonthTitle>
      <MonthDescriptions>
        {`📈 News Headline: "Government announces a major infrastructure push. Experts expect infra sector stocks to rise."
        
💡 Groww Tip: Stocks can give high returns, but they carry higher risk than FDs or Mutual Funds.

Decision 1 (Month 1): What do you do with ₹10,000 from your salary?`}
      </MonthDescriptions>
      <MonthOptions>
        <button onClick={() => handleInvestment('stocks', 11200)}>
          A. Buy Infra Stocks
        </button>
        <button onClick={() => handleInvestment('fd', 10100)}>
          B. Put in FD
        </button>
        <button onClick={() => handleInvestment('mutual-fund', 10800)}>
          C. Invest in an Equity Mutual Fund
        </button>
      </MonthOptions>
    </MonthContainer>
  );
};
