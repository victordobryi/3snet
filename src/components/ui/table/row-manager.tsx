import { FC, Fragment } from 'react';
import { TableRow } from './tyles';
import { tableCell } from './table.styles';

export const TableRowManager: FC<{
  row: TableRow;
  visibleMonths: number[];
  currentMonth: number;
}> = ({ row, visibleMonths, currentMonth }) => (
  <>
    <tr>
      <td rowSpan={2} className='border border-line px-4 py-2 font-medium text-primary'>
        {row.name}
      </td>
      <td className='border border-line px-4 py-2 text-muted'>Income</td>
      {visibleMonths.map((month, i) => {
        const m = row.months[month];
        const isPast = month < currentMonth;

        const noIncomePlan = m?.incomePlan == null;
        const noIncomeFact = m?.incomeFact == null;
        const noPartnersPlan = m?.partnersPlan == null;
        const noPartnersFact = m?.partnersFact == null;

        const allIncomeNoData = noIncomePlan && noIncomeFact;
        const allPartnersNoData = noPartnersPlan && noPartnersFact;

        if (allIncomeNoData && allPartnersNoData) {
          return (
            <td key={i} rowSpan={2} colSpan={2} className={tableCell({ isPast })}>
              No data
            </td>
          );
        }

        if (allIncomeNoData) {
          return (
            <td key={i} colSpan={2} className={tableCell({ position: 'bottom', isPast })}>
              No data
            </td>
          );
        }

        return (
          <Fragment key={i}>
            <td className={tableCell({ position: 'bottom', side: 'right', isPast })}>
              {m?.incomePlan != null ? `$${m.incomePlan.toLocaleString()}` : 'No data'}
            </td>
            <td className={tableCell({ position: 'bottom', side: 'left', isPast })}>
              {m?.incomeFact != null ? `$${m.incomeFact.toLocaleString()}` : 'No data'}
            </td>
          </Fragment>
        );
      })}
    </tr>
    <tr>
      <td className='border border-line px-4 py-2 text-muted'>Active partners</td>
      {visibleMonths.map((month, i) => {
        const m = row.months[month];
        const isPast = month < currentMonth;

        const noIncomePlan = m?.incomePlan == null;
        const noIncomeFact = m?.incomeFact == null;
        const noPartnersPlan = m?.partnersPlan == null;
        const noPartnersFact = m?.partnersFact == null;

        const allIncomeNoData = noIncomePlan && noIncomeFact;
        const allPartnersNoData = noPartnersPlan && noPartnersFact;

        // если оба блока "No data" — уже вставили объединённую ячейку выше
        if (allIncomeNoData && allPartnersNoData) return null;

        // если только Active partners = No data
        if (allPartnersNoData) {
          return (
            <td key={i} colSpan={2} className={tableCell({ position: 'top', isPast })}>
              No data
            </td>
          );
        }

        return (
          <Fragment key={i}>
            <td className={tableCell({ position: 'top', side: 'right', isPast })}>
              {m?.partnersPlan ?? 'No data'}
            </td>
            <td className={tableCell({ position: 'top', side: 'left', isPast })}>
              {m?.partnersFact ?? 'No data'}
            </td>
          </Fragment>
        );
      })}
    </tr>
  </>
);
