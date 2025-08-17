import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  StageContainer,
  StageDescriptions,
  StageOptions,
  StageTitle,
} from "./stage-template";

interface Stage3Props {
  next: () => void;
}

export const Stage3: React.FC<Stage3Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleInvestment = (choice: string, amount: number) => {
    dispatch(gameActions.setMoney(amount));
    next();
  };

  return (
    <StageContainer>
      <StageTitle>Month 2 – Grandma's Gift</StageTitle>
      <StageDescriptions>
        {`You receive a joining bonus of ₹5,000.

Decision 2: Where do you put it?`}
      </StageDescriptions>
      <StageOptions>
        <button onClick={() => handleInvestment('savings', 5000)}>
          A. Keep in Bank Savings
        </button>
        <button onClick={() => handleInvestment('sip', 5200)}>
          B. Start a Mutual Fund SIP
        </button>
      </StageOptions>
    </StageContainer>
  );
};