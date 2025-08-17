import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";

export const Stage2: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Month 2 - First Salary</h2>
      <p>
        {`Congrats! Your first salary of ₹50,000 has just been credited. You’re
        excited — but also wondering: how should you manage your money?`}
      </p>
      <div>
        <button onClick={() => dispatch(gameActions.setMoney(50000))}>
          Put Salary in Bank
        </button>
      </div>
    </div>
  );
};
