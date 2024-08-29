import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from '@tanstack/react-query';

type Props = {
  children: React.ReactNode;
};

export const QueryClientProvider: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProviderBase client={queryClient}>
      {children}
    </QueryClientProviderBase>
  );
};
