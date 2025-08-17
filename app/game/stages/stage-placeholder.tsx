import {
  StageContainer,
  StageDescriptions,
  StageOptions,
  StageTitle,
} from "./stage-template";

export const StagePlaceholder: React.FC<{ next: () => void }> = ({ next }) => {
  return (
    <StageContainer>
      <StageTitle>Nothing Special This Month</StageTitle>
      <StageDescriptions>
        This month passes quietly. Nothing significant happens with your
        finances - just the usual routine of earning, spending, and managing
        your money.
      </StageDescriptions>
      <StageOptions>
        <button onClick={next}>Continue to Next Month</button>
      </StageOptions>
    </StageContainer>
  );
};