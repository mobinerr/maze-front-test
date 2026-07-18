export const PRODUCT_ENDPOINTS = {
  LIST: '/products',
  DETAIL: (id: number) => `/products/${id}`,
} as const;
