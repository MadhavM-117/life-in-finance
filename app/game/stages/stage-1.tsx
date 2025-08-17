import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";
import {
  StageContainer,
  StageDescriptions,
  StageOptions,
  StageTitle,
} from "./stage-template";

export const Stage1: React.FC<{ next: () => void }> = ({ next }) => {
  const dispatch = useAppDispatch();

  return (
    <StageContainer>
      <StageTitle>Month 0 - First Salary</StageTitle>
      <StageDescriptions>
        {`Congrats! Your first salary of ₹50,000 has just been credited. You’re
        excited — but also wondering: how should you manage your money?`}
      </StageDescriptions>
      <StageOptions>
        <button
          onClick={() => {
            dispatch(gameActions.setMoney(50000));
            next();
            console.log("stage 1 complete");
          }}
        >
          Put Salary in Bank
        </button>
      </StageOptions>
    </StageContainer>
  );
};
