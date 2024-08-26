import { useState } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider as QueryClientProviderBase,
} from '@tanstack/react-query';

type Props = {
  dehydratedState: unknown;
  children: React.ReactNode;
};

export const QueryClientProvider: React.FC<Props> = ({
  dehydratedState,
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProviderBase client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
    </QueryClientProviderBase>
  );
};
