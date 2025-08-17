import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  StageContainer,
  StageDescriptions,
  StageOptions,
  StageTitle,
} from "./stage-template";

interface Stage5Props {
  next: () => void;
}

export const Stage5: React.FC<Stage5Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleCreditDecision = (choice: string, cost: number) => {
    // For credit card EMI, we'll deduct the total cost from savings
    if (choice === 'credit-card') {
      dispatch(gameActions.updateMoney(-cost));
    }
    // If choice is 'no-credit', no change to money (cost = 0)
    next();
  };

  return (
    <StageContainer>
      <StageTitle>Month 4 – First Credit Card Offer</StageTitle>
      <StageDescriptions>
        {`Your bank offers you a shiny new credit card with a ₹50,000 limit. You're tempted to use it for shopping.

💡 Groww Tip: Credit cards help build credit history but must be used responsibly.

Decision 4: Do you sign up and use it?

Outcome by Month 12:
If A: Monthly EMI of ~₹2,300 reduces savings, total cost ends up at ~₹27,500
If B: No extra expense`}
      </StageDescriptions>
      <StageOptions>
        <button onClick={() => handleCreditDecision('credit-card', 27500)}>
          A. Yes, buy a new phone (₹25,000 EMI, 12 months, 14% interest)
        </button>
        <button onClick={() => handleCreditDecision('no-credit', 0)}>
          B. No, continue managing with savings
        </button>
      </StageOptions>
    </StageContainer>
  );
};