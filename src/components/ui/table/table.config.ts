import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<any>();

export const generatePlanColumns = (visibleMonths: number[], currentMonth: number) => {
  const baseCols = [
    columnHelper.accessor('name', {
      header: 'Manager',
      cell: (info) => info.getValue(),
    }),
  ];

  const monthCols = visibleMonths.flatMap((monthIndex) => [
    columnHelper.accessor((row) => row.months[monthIndex]?.incomePlan, {
      id: `plan-${monthIndex}`,
      header: () => `${new Date(0, monthIndex).toLocaleString('en', { month: 'long' })} Plan`,
      cell: (info) =>
        info.getValue() != null ? `$${info.getValue().toLocaleString()}` : 'No data',
    }),
    columnHelper.accessor((row) => row.months[monthIndex]?.incomeFact, {
      id: `fact-${monthIndex}`,
      header: () => `${new Date(0, monthIndex).toLocaleString('en', { month: 'long' })} Fact`,
      cell: (info) =>
        info.getValue() != null ? `$${info.getValue().toLocaleString()}` : 'No data',
    }),
  ]);

  return [...baseCols, ...monthCols];
};
