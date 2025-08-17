import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";

export const Month0: React.FC<{ next: () => void }> = ({ next }) => {
  const dispatch = useAppDispatch();

  return (
    <MonthContainer>
      <MonthTitle>Month 0 - First Salary</MonthTitle>
      <MonthDescriptions>
        {`Congrats! Your first salary of ₹50,000 has just been credited. You’re
        excited — but also wondering: how should you manage your money?`}
      </MonthDescriptions>
      <MonthOptions>
        <button
          onClick={() => {
            dispatch(gameActions.setMoney(50000));
            next();
            console.log("month 0 complete");
          }}
        >
          Put Salary in Bank
        </button>
      </MonthOptions>
    </MonthContainer>
  );
};
