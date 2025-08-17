import { useCallback, useMemo, useState } from "react";
import { Stage1 } from "./stage-1";
import { Stage2 } from "./stage-2";
import { Stage3 } from "./stage-3";
import { Stage4 } from "./stage-4";
import { Stage5 } from "./stage-5";
import { Stage6 } from "./stage-6";
import { Stage7 } from "./stage-7";
import { Stage8 } from "./stage-8";
import { Stage9 } from "./stage-9";
import { StagePlaceholder } from "./stage-placeholder";

const MONTHS = [
  Stage1,
  Stage2,
  Stage3,
  Stage4,
  Stage5,
  StagePlaceholder,
  Stage6,
  StagePlaceholder,
  Stage7,
  StagePlaceholder,
  Stage8,
  StagePlaceholder,
  Stage9,
];

export const Stages = () => {
  const [stageIndex, setStageIndex] = useState(0);

  const next = useCallback(() => {
    setStageIndex((s: number) => {
      if (s < MONTHS.length - 1) return s + 1;
      return s;
    });
  }, [setStageIndex]);

  const Stage = useMemo(() => {
    return MONTHS[stageIndex];
  }, [stageIndex]);

  return <Stage next={next} />;
};
