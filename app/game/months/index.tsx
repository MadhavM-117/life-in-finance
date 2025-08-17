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
  const [monthIndex, setMonthIndex] = useState(0);

  const next = useCallback(() => {
    setMonthIndex((s: number) => {
      if (s < MONTHS.length - 1) return s + 1;
      return s;
    });
  }, [setMonthIndex]);

  const Month = useMemo(() => {
    return MONTHS[monthIndex];
  }, [monthIndex]);

  return <Month next={next} />;
};
