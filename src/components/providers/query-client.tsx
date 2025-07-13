import {
  QueryClientProvider as ReactQueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';
import type { FC, PropsWithChildren } from 'react';

const queryClient = new QueryClient();

const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>;
};
export default QueryClientProvider;
