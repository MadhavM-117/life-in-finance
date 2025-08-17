import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";

interface Stage2Props {
  next: () => void;
}

export const Stage2: React.FC<Stage2Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleInvestment = (choice: string, amount: number) => {
    dispatch(gameActions.setMoney(amount));
    next();
  };

  return (
    <div>
      <h2>Month 1: Union Budget</h2>
      
      <div className="news-headline">
        <h3>📈 News Headline:</h3>
        <p>"Government announces a major infrastructure push. Experts expect infra sector stocks to rise."</p>
      </div>

      <div className="groww-tip">
        <h3>💡 Groww Tip:</h3>
        <p>Stocks can give high returns, but they carry higher risk than FDs or Mutual Funds.</p>
      </div>

      <div className="decision">
        <h3>Decision 1 (Month 1): What do you do with ₹10,000 from your salary?</h3>
        <div className="options">
          <button onClick={() => handleInvestment('stocks', 11200)}>
            A. Buy Infra Stocks
          </button>
          <button onClick={() => handleInvestment('fd', 10100)}>
            B. Put in FD
          </button>
          <button onClick={() => handleInvestment('mutual-fund', 10800)}>
            C. Invest in an Equity Mutual Fund
          </button>
        </div>
      </div>
    </div>
  );
};
