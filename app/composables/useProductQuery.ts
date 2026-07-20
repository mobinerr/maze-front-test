import { ref, type Ref } from 'vue';

import { DEFAULT_PRODUCT_FILTERS, PRODUCT_SORT_OPTIONS } from '@/constants';
import type { ProductFilters, ProductSortValue } from '@/types';

const useProductQuery = (productFilters: Ref<ProductFilters>) => {
  const route = useRoute();
  const router = useRouter();

  const isInitialized = ref(false);

  const isValidSort = (value: string): value is ProductSortValue => {
    return PRODUCT_SORT_OPTIONS.some(option => option.value === value);
  };

  //   URL Query -> Product Filters
  const syncFiltersFromQuery = (): void => {
    const query = route.query;

    productFilters.value.search =
      typeof query.search === 'string' ? query.search : DEFAULT_PRODUCT_FILTERS.search;

    productFilters.value.sort =
      typeof query.sort === 'string' && isValidSort(query.sort)
        ? query.sort
        : DEFAULT_PRODUCT_FILTERS.sort;

    productFilters.value.categories =
      typeof query.categories === 'string'
        ? query.categories.split(',')
        : [...DEFAULT_PRODUCT_FILTERS.categories];

    isInitialized.value = true;
  };

  //   Product Filters -> URL Query
  const syncQueryFromFilters = async (): Promise<void> => {
    const query = {
      ...(productFilters.value.search && {
        search: productFilters.value.search,
      }),

      ...(productFilters.value.sort !== DEFAULT_PRODUCT_FILTERS.sort && {
        sort: productFilters.value.sort,
      }),

      ...(productFilters.value.categories.length && {
        categories: productFilters.value.categories.join(','),
      }),
    };
    const currentQuery = route.query;
    const isSameQuery = JSON.stringify(query) === JSON.stringify(currentQuery);
    if (isSameQuery) {
      return;
    }
    await router.replace({
      query,
    });
  };

  //   Watch Product Filters
  const watchProductFilters = (): void => {
    watch(
      productFilters,
      () => {
        if (!isInitialized.value) {
          return;
        }
        syncQueryFromFilters();
      },
      {
        deep: true,
      },
    );
  };

  //   Browser Back / Forward Sync
  const watchRouteQuery = (): void => {
    watch(
      () => route.query,
      () => {
        if (!isInitialized.value) {
          return;
        }
        syncFiltersFromQuery();
      },
    );
  };

  return {
    syncFiltersFromQuery,
    watchProductFilters,
    watchRouteQuery,
  };
};

export { useProductQuery };
