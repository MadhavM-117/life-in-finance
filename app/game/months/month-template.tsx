export const MonthContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="max-w-2xl">{children}</div>;
};

export const MonthTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h2 className="text-2xl font-bold py-4">{children}</h2>;
};

export const MonthDescriptions: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p>{children}</p>;
};

export const MonthOptions: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="py-6 flex gap-2 justify-between">{children}</div>;
};
