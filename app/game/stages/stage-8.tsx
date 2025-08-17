import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";

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
    <div>
      <h2>Month 10 – Emergency Expense</h2>
      
      <p>"Your bike breaks down. You need ₹10,000 for repairs."</p>

      <div className="decision">
        <h3>Decision 7: How do you arrange it?</h3>
        <div className="options">
          <button onClick={() => handleEmergencyDecision('savings', 10000)}>
            A. Withdraw from Bank Savings
          </button>
          <button onClick={() => handleEmergencyDecision('mutual-fund', 10100)}>
            B. Redeem Mutual Fund units (1% exit load)
          </button>
          <button onClick={() => handleEmergencyDecision('credit-card', 11400)}>
            C. Use Credit Card
          </button>
        </div>
      </div>

      <div className="outcome-info">
        <h4>Outcome:</h4>
        <p><strong>A:</strong> No penalty, but savings drop</p>
        <p><strong>B:</strong> Exit load reduces MF redemption value (₹10,000 → ₹9,900)</p>
        <p><strong>C:</strong> Immediate fix, but repayment with interest later</p>
      </div>
    </div>
  );
};