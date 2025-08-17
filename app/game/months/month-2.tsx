import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";

interface Month2Props {
  next: () => void;
}

export const Month2: React.FC<Month2Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleInvestment = (choice: string, amount: number) => {
    dispatch(gameActions.setMoney(amount));
    next();
  };

  return (
    <MonthContainer>
      <MonthTitle>Month 2 – Grandma's Gift</MonthTitle>
      <MonthDescriptions>
        {`You receive a joining bonus of ₹5,000.

Decision 2: Where do you put it?`}
      </MonthDescriptions>
      <MonthOptions>
        <button onClick={() => handleInvestment('savings', 5000)}>
          A. Keep in Bank Savings
        </button>
        <button onClick={() => handleInvestment('sip', 5200)}>
          B. Start a Mutual Fund SIP
        </button>
      </MonthOptions>
    </MonthContainer>
  );
};