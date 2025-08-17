import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";

interface Stage6Props {
  next: () => void;
}

export const Stage6: React.FC<Stage6Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleInvestment = (choice: string, amount: number) => {
    dispatch(gameActions.setMoney(amount));
    next();
  };

  return (
    <div>
      <h2>Event 3: Gold Rally (Month 6)</h2>
      
      <div className="news-headline">
        <h3>📈 Headline:</h3>
        <p>"Gold prices rise as global uncertainty spooks investors."</p>
      </div>

      <p>"You have ₹5,000 sitting in your savings account."</p>

      <div className="decision">
        <h3>Decision 5: Where do you put it?</h3>
        <div className="options">
          <button onClick={() => handleInvestment('gold', 5500)}>
            A. Buy Gold
          </button>
          <button onClick={() => handleInvestment('debt-fund', 5250)}>
            B. Invest in Debt Mutual Fund
          </button>
        </div>
      </div>

      <div className="outcome-info">
        <h4>Outcome by Month 9:</h4>
        <p><strong>Gold:</strong> ₹5,500 (+10%)</p>
        <p><strong>Debt Mutual Fund:</strong> ₹5,250 (+5%)</p>
      </div>
    </div>
  );
};