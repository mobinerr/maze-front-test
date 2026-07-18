import { Fetch, PRODUCT_ENDPOINTS } from '@/api';
import type { ProductResponseType } from '@/types';

const getProducts = async (): Promise<ProductResponseType> => {
  return Fetch<ProductResponseType>({
    url: PRODUCT_ENDPOINTS.LIST,
  });
};

export { getProducts };
