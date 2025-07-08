import { FC, useMemo, useState } from 'react';
import { useApiData } from '@/hooks/useApiData';
import { TableControls } from '@/components/ui/table/controls';
import { PlanTable } from '@/components/ui/table/table';

const Plan: FC = () => {
  const { data, isLoading, error } = useApiData();
  const [startMonth, setStartMonth] = useState(new Date().getMonth());
  const visibleMonths = Array.from({ length: 6 }, (_, i) => (startMonth + i) % 12);

  const handlePrevMonth = () => setStartMonth((prev) => (prev - 1 + 12) % 12);
  const handleNextMonth = () => setStartMonth((prev) => (prev + 1) % 12);

  const tableData = useMemo(() => {
    if (!data?.data.table) return [];
    return data.data.table.map((row) => ({
      id: row.id,
      name: row.adminName,
      months: row.months.map((month) =>
        month
          ? {
              incomePlan: month.plan.income,
              incomeFact: month.fact.income,
              partnersPlan: month.plan.activePartners,
              partnersFact: month.fact.activePartners,
            }
          : null
      ),
    }));
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='p-4 w-full'>
      <TableControls onPrev={handlePrevMonth} onNext={handleNextMonth} />
      <PlanTable visibleMonths={visibleMonths} data={tableData} />
    </div>
  );
};

export default Plan;
