import { useAppSelector } from "~/redux/hooks";
import type { RootState } from "~/redux/store";
import { Months } from "./months";

export function Game() {
  const {
    savings,
    mutualFunds,
    fixedDeposit,
    stockMarket,
    monthsPassed,
    isVisible,
  } = useAppSelector((state: RootState) => state.game);

  return (
    <main className="w-dvw h-dvh">
      <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
        <div>Life in Finance</div>
        <div>Savings: ₹ {savings}</div>
        {isVisible.mutualFunds && <div>Mutual Funds: ₹ {mutualFunds}</div>}
        {isVisible.fixedDeposit && <div>Fixed Deposit: ₹ {fixedDeposit}</div>}
        {isVisible.stockMarket && <div>Stock Market: ₹ {stockMarket}</div>}

        <div>
          Total Money: ₹ {savings + mutualFunds + fixedDeposit + stockMarket}
        </div>
        <div>Time Passed: {monthsPassed} Months</div>
        <Months />
      </div>
    </main>
  );
}
