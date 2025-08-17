import { useAppDispatch } from "~/redux/hooks";
import { gameActions } from "~/redux/slices/gameSlice";

interface Stage4Props {
  next: () => void;
}

export const Stage4: React.FC<Stage4Props> = ({ next }) => {
  const dispatch = useAppDispatch();

  const handleInvestment = (choice: string, multiplier: number) => {
    // Assuming we need to apply multiplier to existing money
    // FD: +2% (1.02), Stocks: -8% (0.92), Mutual Fund: -4% (0.96)
    dispatch(gameActions.updateMoney(multiplier));
    next();
  };

  return (
    <div>
      <h2>Event 2: RBI Hikes Repo Rate (Month 3)</h2>
      
      <div className="news-headline">
        <h3>📈 Headline:</h3>
        <p>"RBI raises repo rate to control inflation. FD rates rise, stock market dips. Debt Mutual Funds may benefit."</p>
      </div>

      <div className="groww-tip">
        <h3>💡 Groww Tip:</h3>
        <p>When interest rates go up, debt funds may become attractive while stocks can take a hit.</p>
      </div>

      <div className="decision">
        <h3>Decision 3 (Month 3): What do you do with your current investments?</h3>
        <div className="options">
          <button onClick={() => handleInvestment('fd', 1.02)}>
            A. Move funds into FDs
          </button>
          <button onClick={() => handleInvestment('stocks', 0.92)}>
            B. Stay in Stocks
          </button>
          <button onClick={() => handleInvestment('mutual-fund', 0.96)}>
            C. Stay in Mutual Funds
          </button>
        </div>
      </div>
    </div>
  );
};