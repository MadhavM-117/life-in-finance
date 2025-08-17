import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";

interface Month5Props {
  next: () => void;
}

export const Month5: React.FC<Month5Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleInvestment = (choice: string, amount: number) => {
    dispatch(gameActions.setMoney(amount));
    next();
  };

  return (
    <MonthContainer>
      <MonthTitle>Event 3: Gold Rally (Month 6)</MonthTitle>
      <MonthDescriptions>
        {`📈 Headline: "Gold prices rise as global uncertainty spooks investors."

You have ₹5,000 sitting in your savings account.

Decision 5: Where do you put it?

Outcome by Month 9:
Gold: ₹5,500 (+10%)
Debt Mutual Fund: ₹5,250 (+5%)`}
      </MonthDescriptions>
      <MonthOptions>
        <button onClick={() => handleInvestment('gold', 5500)}>
          A. Buy Gold
        </button>
        <button onClick={() => handleInvestment('debt-fund', 5250)}>
          B. Invest in Debt Mutual Fund
        </button>
      </MonthOptions>
    </MonthContainer>
  );
};