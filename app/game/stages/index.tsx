import { useCallback, useMemo, useState } from "react";
import { Stage1 } from "./stage-1";
import { Stage2 } from "./stage-2";

const STAGES = [Stage1, Stage2];

export const Stages = () => {
  const [stageIndex, setStageIndex] = useState(0);

  const next = useCallback(() => {
    setStageIndex((s: number) => {
      if (s < STAGES.length - 1) return s + 1;
      return s;
    });
  }, [setStageIndex]);

  const Stage = useMemo(() => {
    return STAGES[stageIndex];
  }, [stageIndex]);

  return <Stage next={next} />;
};
