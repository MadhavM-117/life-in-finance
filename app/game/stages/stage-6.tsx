import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  StageContainer,
  StageDescriptions,
  StageOptions,
  StageTitle,
} from "./stage-template";

interface Stage6Props {
  next: () => void;
}

export const Stage6: React.FC<Stage6Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleInvestment = (choice: string, amount: number) => {
    dispatch(gameActions.setMoney(amount));
    next();
  };

  return (
    <StageContainer>
      <StageTitle>Event 3: Gold Rally (Month 6)</StageTitle>
      <StageDescriptions>
        {`📈 Headline: "Gold prices rise as global uncertainty spooks investors."

You have ₹5,000 sitting in your savings account.

Decision 5: Where do you put it?

Outcome by Month 9:
Gold: ₹5,500 (+10%)
Debt Mutual Fund: ₹5,250 (+5%)`}
      </StageDescriptions>
      <StageOptions>
        <button onClick={() => handleInvestment('gold', 5500)}>
          A. Buy Gold
        </button>
        <button onClick={() => handleInvestment('debt-fund', 5250)}>
          B. Invest in Debt Mutual Fund
        </button>
      </StageOptions>
    </StageContainer>
  );
};