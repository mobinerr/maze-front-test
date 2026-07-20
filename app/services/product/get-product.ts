import { createError } from 'h3';

import { Fetch, PRODUCT_ENDPOINTS } from '@/api';

import type { ProductDetailResponseType } from '@/types';

const getProduct = async (id: number): Promise<ProductDetailResponseType> => {
  const product = await Fetch<ProductDetailResponseType>({
    url: PRODUCT_ENDPOINTS.DETAIL(id),
  });

  if (!product?.id) {
    throw createError({
      status: 404,
      message: 'محصول یافت نشد.',
    });
  }

  return product;
};

export { getProduct };
