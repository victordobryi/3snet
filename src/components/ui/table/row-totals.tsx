import { FC, Fragment } from 'react';
import { MonthData } from './tyles';
import { tableCell } from './table.styles';

export const TableRowTotals: FC<{
  visibleMonths: number[];
  totals: MonthData[];
}> = ({ visibleMonths, totals }) => {
  const currentMonth = new Date().getMonth();

  return (
    <>
      <tr className='text-primary font-semibold'>
        <td rowSpan={2} className='border border-line px-4 py-2'>
          Manager
        </td>
        <td className='border border-line px-4 py-2'>Total income</td>
        {visibleMonths.map((month, i) => (
          <Fragment key={i}>
            <td
              className={tableCell({
                side: 'right',
                position: 'bottom',
                isPast: month < currentMonth,
              })}
            >
              ${totals[month].incomePlan.toLocaleString()}
            </td>
            <td
              className={tableCell({
                side: 'left',
                position: 'bottom',
                isPast: month < currentMonth,
              })}
            >
              ${totals[month].incomeFact.toLocaleString()}
            </td>
          </Fragment>
        ))}
      </tr>
      <tr className='text-primary font-semibold'>
        <td className='border border-line px-4 py-2'>Total active partners</td>
        {visibleMonths.map((month, i) => (
          <Fragment key={i}>
            <td
              className={tableCell({
                side: 'right',
                position: 'top',
                isPast: month < currentMonth,
              })}
            >
              {totals[month].partnersPlan}
            </td>
            <td
              className={tableCell({
                side: 'left',
                position: 'top',
                isPast: month < currentMonth,
              })}
            >
              {totals[month].partnersFact}
            </td>
          </Fragment>
        ))}
      </tr>
    </>
  );
};
