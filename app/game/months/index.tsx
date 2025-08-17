import { useCallback, useMemo, useState } from "react";
import { Month0 } from "./month-0";
import { Month1 } from "./month-1";
import { Month2 } from "./month-2";
import { Month3 } from "./month-3";
import { Month4 } from "./month-4";
import { Month5 } from "./month-5";
import { Month6 } from "./month-6";
import { Month7 } from "./month-7";
import { Month8 } from "./month-8";
import { MonthPlaceholder } from "./month-placeholder";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import type { RootState } from "~/redux/store";
import { gameActions } from "~/redux/slices/gameSlice";

const MONTHS = [
  Month0,
  Month1,
  Month2,
  Month3,
  Month4,
  MonthPlaceholder,
  Month5,
  MonthPlaceholder,
  Month6,
  MonthPlaceholder,
  Month7,
  MonthPlaceholder,
  Month8,
];

export const Months = () => {
  const dispatch = useAppDispatch();
  const { monthsPassed } = useAppSelector((state: RootState) => state.game);

  const next = useCallback(() => {
    setTimeout(() => {
      dispatch(gameActions.processMonthlyCalculations());
    }, 750);
  }, []);

  const Month = useMemo(() => {
    return MONTHS[monthsPassed];
  }, [monthsPassed]);

  return <Month next={next} />;
};
