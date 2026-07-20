import { Fetch, PRODUCT_ENDPOINTS } from '@/api';

import type { ProductDetailResponseType } from '@/types';

const getProduct = async (id: number): Promise<ProductDetailResponseType> => {
  return Fetch<ProductDetailResponseType>({
    url: PRODUCT_ENDPOINTS.DETAIL(id),
  });
};

export { getProduct };
