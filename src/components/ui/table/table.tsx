import { FC, useMemo } from 'react';
import { MonthData, TableRow } from './tyles';
import { TableHead } from './head';
import { TableRowTotals } from './row-totals';
import { TableRowManager } from './row-manager';

type Props = {
  visibleMonths: number[];
  data: TableRow[];
};

export const PlanTable: FC<Props> = ({ visibleMonths, data }) => {
  const currentMonth = new Date().getMonth();

  const totals = useMemo(() => {
    const result: MonthData[] = Array(12)
      .fill(0)
      .map(() => ({
        incomePlan: 0,
        incomeFact: 0,
        partnersPlan: 0,
        partnersFact: 0,
      }));

    data.forEach((row) => {
      row.months.forEach((month, index) => {
        if (!month) return;
        result[index].incomePlan += month.incomePlan;
        result[index].incomeFact += month.incomeFact;
        result[index].partnersPlan += month.partnersPlan;
        result[index].partnersFact += month.partnersFact;
      });
    });

    return result;
  }, [data]);

  return (
    <div className='overflow-x-auto border border-line rounded'>
      <table className='min-w-full border-collapse text-sm text-primary'>
        <TableHead visibleMonths={visibleMonths} />
        <tbody>
          <TableRowTotals visibleMonths={visibleMonths} totals={totals} />
          {data.map((row) => (
            <TableRowManager
              key={row.id}
              row={row}
              visibleMonths={visibleMonths}
              currentMonth={currentMonth}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
