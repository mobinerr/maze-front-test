import { computed, type Ref } from 'vue';

import { createBreadcrumb } from '@/utils';
import type { BreadcrumbItem, ProductDetailResponseType, ProductSpecification } from '@/types';

export const useProduct = (product: Ref<ProductDetailResponseType | null | undefined>) => {
  const hasProduct = computed(() => Boolean(product.value?.id));

  const breadcrumbItems = computed<BreadcrumbItem[]>(() =>
    createBreadcrumb(
      {
        label: 'خانه',
        to: '/',
      },
      {
        label: 'لیست محصولات',
        to: '/products',
      },
      {
        label: product.value?.title ?? '',
      },
    ),
  );

  const specifications = computed<ProductSpecification[]>(() => {
    if (!product.value) return [];

    return [
      {
        label: 'قیمت',
        value: `$${product.value.price}`,
      },
      {
        label: 'توضیحات',
        value: product.value.description,
        multiline: true,
      },
      {
        label: 'دسته‌بندی',
        value: product.value.category,
      },
      {
        label: 'امتیاز',
        value: `${product.value.rating.rate} / 5`,
      },
      {
        label: 'تعداد نظرات',
        value: product.value.rating.count,
      },
    ];
  });

  return {
    specifications,
    hasProduct,
    breadcrumbItems,
  };
};
