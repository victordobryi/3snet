import { cva } from 'class-variance-authority';

export const tableCell = cva('px-4 py-1 text-left border border-line', {
  variants: {
    position: {
      top: 'border-t-0',
      bottom: 'border-b-0',
    },
    side: {
      left: 'border-l-0',
      right: 'border-r-0',
    },
    isPast: {
      true: 'text-muted',
      false: '',
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
});

export const headerCell = cva('px-4 py-2 border border-line text-left font-semibold', {
  variants: {
    isPast: {
      true: 'text-muted',
      false: '',
    },
    position: {
      top: 'border-b-0',
      bottom: 'border-t-0',
      left: 'border-r-0',
      right: 'border-l-0',
    },
    size: {
      sm: 'text-xs py-1',
      base: '',
    },
  },
});
