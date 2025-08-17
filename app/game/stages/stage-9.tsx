import { useAppSelector } from "~/redux/hooks";

interface Stage9Props {
  next: () => void;
}

export const Stage9: React.FC<Stage9Props> = ({ next }) => {
  const money = useAppSelector((state) => state.game.money);

  return (
    <div>
      <h2>Month 12 – End of Simulation</h2>
      
      <p>"Here's how your portfolio looks after one year of working and investing."</p>

      <div className="results-screen">
        <h3>Results Summary</h3>
        
        <div className="your-path">
          <h4>Your Path (based on decisions)</h4>
          <p>Final Amount: ₹{money?.toLocaleString() || '0'}</p>
        </div>

        <div className="benchmarks">
          <h4>Comparison Benchmarks:</h4>
          <div className="benchmark-item">
            <strong>FD-only Saver:</strong> Safe but slow growth
          </div>
          <div className="benchmark-item">
            <strong>MF SIP Investor:</strong> Steady growth, low effort
          </div>
          <div className="benchmark-item">
            <strong>Credit Card Spender:</strong> Shows cost of debt
          </div>
        </div>
      </div>

      <div className="groww-tip">
        <h3>💡 Final Groww Tip:</h3>
        <p>
          In your first job, it's tempting to spend. But the earlier you start investing in Mutual Funds, 
          the more you benefit from compounding. Use credit wisely, keep an emergency fund, and balance 
          between growth (Stocks, Mutual Funds) and safety (FDs, Gold).
        </p>
      </div>
    </div>
  );
};