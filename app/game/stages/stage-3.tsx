import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";

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
    <div>
      <h2>Month 2 – Grandma's Gift</h2>
      
      <p>"You receive a joining bonus of ₹5,000."</p>

      <div className="decision">
        <h3>Decision 2: Where do you put it?</h3>
        <div className="options">
          <button onClick={() => handleInvestment('savings', 5000)}>
            A. Keep in Bank Savings
          </button>
          <button onClick={() => handleInvestment('sip', 5200)}>
            B. Start a Mutual Fund SIP
          </button>
        </div>
      </div>
    </div>
  );
};