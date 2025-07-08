import { FC, Fragment } from 'react';
import { headerCell } from './table.styles';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const TableHead: FC<{ visibleMonths: number[] }> = ({ visibleMonths }) => {
  const currentMonth = new Date().getMonth();

  return (
    <thead className='bg-table'>
      <tr>
        <th rowSpan={2} className='border border-line px-4 py-2' />
        <th rowSpan={2} className='border border-line px-4 py-2' />
        {visibleMonths.map((month) => (
          <th
            key={month}
            colSpan={2}
            className={headerCell({
              isPast: month < currentMonth,
              position: 'top',
            })}
          >
            {monthNames[month]}
          </th>
        ))}
      </tr>
      <tr>
        {visibleMonths.map((month) => (
          <Fragment key={month}>
            <th
              className={headerCell({
                isPast: month < currentMonth,
                position: 'left',
                size: 'sm',
              })}
            >
              Plan:
            </th>
            <th
              className={headerCell({
                isPast: month < currentMonth,
                position: 'right',
                size: 'sm',
              })}
            >
              Fact:
            </th>
          </Fragment>
        ))}
      </tr>
    </thead>
  );
};
