import { useAppSelector } from "~/redux/hooks";
import type { RootState } from "~/redux/store";
import { Stages } from "./stages";

export function Game() {
  const { totalMoney, monthsPassed } = useAppSelector(
    (state: RootState) => state.game,
  );

  return (
    <main className="w-dvw h-dvh">
      <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
        <div>Life in Finance</div>
        <div>Total Money: ₹ {totalMoney}</div>
        <div>Time Passed: {monthsPassed} Months</div>
        <Stages />
      </div>
    </main>
  );
}
