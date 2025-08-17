import { useAppSelector } from "~/redux/hooks";
import {
  StageContainer,
  StageDescriptions,
  StageOptions,
  StageTitle,
} from "./stage-template";

interface Stage9Props {
  next: () => void;
}

export const Stage9: React.FC<Stage9Props> = ({ next }) => {
  const money = useAppSelector((state) => state.game.money);

  return (
    <StageContainer>
      <StageTitle>Month 12 – End of Simulation</StageTitle>
      <StageDescriptions>
        {`Here's how your portfolio looks after one year of working and investing.

Results Summary

Your Path (based on decisions)
Final Amount: ₹${money?.toLocaleString() || '0'}

Comparison Benchmarks:
FD-only Saver: Safe but slow growth
MF SIP Investor: Steady growth, low effort
Credit Card Spender: Shows cost of debt

💡 Final Groww Tip:
In your first job, it's tempting to spend. But the earlier you start investing in Mutual Funds, the more you benefit from compounding. Use credit wisely, keep an emergency fund, and balance between growth (Stocks, Mutual Funds) and safety (FDs, Gold).`}
      </StageDescriptions>
      <StageOptions>
        <button onClick={next}>
          Continue
        </button>
      </StageOptions>
    </StageContainer>
  );
};