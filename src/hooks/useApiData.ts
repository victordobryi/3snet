import { useQuery } from '@tanstack/react-query';

interface ApiResponse {
  success: boolean;
  data: {
    total: Array<{
      fact: {
        income: number;
        activePartners: number;
      };
      plan: {
        income: number;
        activePartners: number;
      };
    }>;
    table: Array<{
      id: number;
      adminId: number;
      adminName: string;
      months: Array<{
        income: number;
        activePartners: number;
        plan: {
          income: number;
          activePartners: number;
        };
        fact: {
          income: number;
          activePartners: number;
        };
      } | null>;
      year: number;
    }>;
  };
}

const API_URL = 'https://3snet.co/js_test/api.json';

const fetchApiData = async (): Promise<ApiResponse> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

export const useApiData = () => {
  return useQuery<ApiResponse, Error>({
    queryKey: ['apiData'],
    queryFn: fetchApiData,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
