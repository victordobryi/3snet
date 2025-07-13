export type MonthData = {
  incomePlan: number;
  incomeFact: number;
  partnersPlan: number;
  partnersFact: number;
};

export type TableRow = {
  id: number;
  name: string;
  months: (MonthData | null)[];
};
