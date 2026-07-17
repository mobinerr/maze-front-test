import { Fetch } from '@/api';
import type { ProductResponseType } from '@/types';

const getProducts = async (): Promise<ProductResponseType> => {
  return Fetch<ProductResponseType>({
    url: '/products',
  });
};

export { getProducts };
