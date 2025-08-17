import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  StageContainer,
  StageDescriptions,
  StageOptions,
  StageTitle,
} from "./stage-template";

interface Stage7Props {
  next: () => void;
}

export const Stage7: React.FC<Stage7Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleShoppingDecision = (choice: string, cost: number) => {
    // Deduct the cost from current money
    dispatch(gameActions.updateMoney(-cost));
    next();
  };

  return (
    <StageContainer>
      <StageTitle>Event 4: Festive Season Shopping (Month 8)</StageTitle>
      <StageDescriptions>
        {`Diwali is around the corner. Your friends are upgrading their wardrobes and gadgets.

Decision 6: What do you do?

Outcome:
A: Adds ~₹1,200/month EMI burden for a year
B: One-time hit to savings but no debt`}
      </StageDescriptions>
      <StageOptions>
        <button onClick={() => handleShoppingDecision('credit-card', 16400)}>
          A. Use Credit Card (₹15,000 spend, EMI option, 14% interest)
        </button>
        <button onClick={() => handleShoppingDecision('savings', 15000)}>
          B. Spend only from Bank Savings
        </button>
      </StageOptions>
    </StageContainer>
  );
};