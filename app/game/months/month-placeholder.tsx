import {
  MonthContainer,
  MonthDescriptions,
  MonthOptions,
  MonthTitle,
} from "./month-template";

export const MonthPlaceholder: React.FC<{ next: () => void }> = ({ next }) => {
  return (
    <MonthContainer>
      <MonthTitle>Nothing Special This Month</MonthTitle>
      <MonthDescriptions>
        This month passes quietly. Nothing significant happens with your
        finances - just the usual routine of earning, spending, and managing
        your money.
      </MonthDescriptions>
      <MonthOptions>
        <button onClick={next}>Continue to Next Month</button>
      </MonthOptions>
    </MonthContainer>
  );
};