import { FC } from 'react';

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export const TableControls: FC<Props> = ({ onPrev, onNext }) => (
  <div className='flex justify-end gap-x-4 mb-4'>
    <button
      onClick={onPrev}
      className='px-4 py-2 border border-primary text-primary rounded-lg cursor-pointer'
    >
      ←
    </button>
    <button
      onClick={onNext}
      className='px-4 py-2 border border-primary text-primary rounded-lg cursor-pointer'
    >
      →
    </button>
    <button disabled className='px-4 py-2 rounded-lg text-white bg-primary'>
      + Add plan
    </button>
  </div>
);
