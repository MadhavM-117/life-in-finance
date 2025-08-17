import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";

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
    <div>
      <h2>Event 4: Festive Season Shopping (Month 8)</h2>
      
      <p>"Diwali is around the corner. Your friends are upgrading their wardrobes and gadgets."</p>

      <div className="decision">
        <h3>Decision 6: What do you do?</h3>
        <div className="options">
          <button onClick={() => handleShoppingDecision('credit-card', 16400)}>
            A. Use Credit Card (₹15,000 spend, EMI option, 14% interest)
          </button>
          <button onClick={() => handleShoppingDecision('savings', 15000)}>
            B. Spend only from Bank Savings
          </button>
        </div>
      </div>

      <div className="outcome-info">
        <h4>Outcome:</h4>
        <p><strong>A:</strong> Adds ~₹1,200/month EMI burden for a year</p>
        <p><strong>B:</strong> One-time hit to savings but no debt</p>
      </div>
    </div>
  );
};