import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";

interface Month6Props {
  next: () => void;
}

export const Month6: React.FC<Month6Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleShoppingDecision = (choice: string, cost: number) => {
    // Deduct the cost from current money
    dispatch(gameActions.updateMoney(-cost));
    next();
  };

  return (
    <MonthContainer>
      <MonthTitle>Event 4: Festive Season Shopping (Month 8)</MonthTitle>
      <MonthDescriptions>
        {`Diwali is around the corner. Your friends are upgrading their wardrobes and gadgets.

Decision 6: What do you do?

Outcome:
A: Adds ~₹1,200/month EMI burden for a year
B: One-time hit to savings but no debt`}
      </MonthDescriptions>
      <MonthOptions>
        <button onClick={() => handleShoppingDecision('credit-card', 16400)}>
          A. Use Credit Card (₹15,000 spend, EMI option, 14% interest)
        </button>
        <button onClick={() => handleShoppingDecision('savings', 15000)}>
          B. Spend only from Bank Savings
        </button>
      </MonthOptions>
    </MonthContainer>
  );
};