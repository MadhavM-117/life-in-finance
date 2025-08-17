import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  StageContainer,
  StageDescriptions,
  StageOptions,
  StageTitle,
} from "./stage-template";

interface Stage8Props {
  next: () => void;
}

export const Stage8: React.FC<Stage8Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleEmergencyDecision = (choice: string, cost: number) => {
    // Deduct the cost from current money
    dispatch(gameActions.updateMoney(-cost));
    next();
  };

  return (
    <StageContainer>
      <StageTitle>Month 10 – Emergency Expense</StageTitle>
      <StageDescriptions>
        {`Your bike breaks down. You need ₹10,000 for repairs.

Decision 7: How do you arrange it?

Outcome:
A: No penalty, but savings drop
B: Exit load reduces MF redemption value (₹10,000 → ₹9,900)
C: Immediate fix, but repayment with interest later`}
      </StageDescriptions>
      <StageOptions>
        <button onClick={() => handleEmergencyDecision('savings', 10000)}>
          A. Withdraw from Bank Savings
        </button>
        <button onClick={() => handleEmergencyDecision('mutual-fund', 10100)}>
          B. Redeem Mutual Fund units (1% exit load)
        </button>
        <button onClick={() => handleEmergencyDecision('credit-card', 11400)}>
          C. Use Credit Card
        </button>
      </StageOptions>
    </StageContainer>
  );
};