import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";
import { gameActions } from "~/redux/slices/gameSlice";

interface Month8Props {
  next: () => void;
}

export const Month8: React.FC<Month8Props> = ({ next }) => {
  const { savings, fixedDeposit, stockMarket, mutualFunds } = useAppSelector(
    (state) => state.game,
  );
  const dispatch = useAppDispatch();

  return (
    <MonthContainer>
      <MonthTitle>Month 12 – End of Simulation</MonthTitle>
      <MonthDescriptions>
        {`Here's how your portfolio looks after one year of working and investing.

Results Summary

Your Path (based on decisions)
Final Amount: ₹${(savings + fixedDeposit + stockMarket + mutualFunds)?.toLocaleString() || "0"}

Comparison Benchmarks:
FD-only Saver: Safe but slow growth
MF SIP Investor: Steady growth, low effort
Credit Card Spender: Shows cost of debt

💡 Final Groww Tip:
In your first job, it's tempting to spend. But the earlier you start investing in Mutual Funds, the more you benefit from compounding. Use credit wisely, keep an emergency fund, and balance between growth (Stocks, Mutual Funds) and safety (FDs, Gold).`}
      </MonthDescriptions>
      <MonthOptions>
        <button onClick={() => dispatch(gameActions.reset())}>Restart</button>
      </MonthOptions>
    </MonthContainer>
  );
};
