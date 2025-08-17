import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  StageContainer,
  StageDescriptions,
  StageOptions,
  StageTitle,
} from "./stage-template";

interface Stage2Props {
  next: () => void;
}

export const Stage2: React.FC<Stage2Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleInvestment = (choice: string, amount: number) => {
    dispatch(gameActions.setMoney(amount));
    next();
  };

  return (
    <StageContainer>
      <StageTitle>Month 1: Union Budget</StageTitle>
      <StageDescriptions>
        {`📈 News Headline: "Government announces a major infrastructure push. Experts expect infra sector stocks to rise."
        
💡 Groww Tip: Stocks can give high returns, but they carry higher risk than FDs or Mutual Funds.

Decision 1 (Month 1): What do you do with ₹10,000 from your salary?`}
      </StageDescriptions>
      <StageOptions>
        <button onClick={() => handleInvestment('stocks', 11200)}>
          A. Buy Infra Stocks
        </button>
        <button onClick={() => handleInvestment('fd', 10100)}>
          B. Put in FD
        </button>
        <button onClick={() => handleInvestment('mutual-fund', 10800)}>
          C. Invest in an Equity Mutual Fund
        </button>
      </StageOptions>
    </StageContainer>
  );
};
