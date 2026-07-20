const PRODUCT_ROUTES = {
  LIST: '/products',

  DETAILS(id: number | string) {
    return `/products/${id}`;
  },
} as const;

export { PRODUCT_ROUTES };
