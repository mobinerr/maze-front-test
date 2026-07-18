const LINKS = {
  HEADER: [
    {
      id: 'products',
      title: 'لیست محصولات',
      to: '/products',
      icon: 'products',
      disabled: false,
    },
    {
      id: 'consultation',
      title: 'دریافت مشاوره',
      to: '#',
      icon: 'consultation',
      disabled: false,
    },
    {
      id: 'faq',
      title: 'سوالات متداول',
      to: '#',
      icon: 'faq',
      disabled: false,
    },
    {
      id: 'contact',
      title: 'تماس با ما',
      to: '#',
      icon: 'contact',
      disabled: false,
    },
  ],
  FOOTER: [
    {
      id: 'quick_access',
      title: 'دسترسی سریع',
      children: [
        {
          id: 'about',
          title: 'درباره ما',
          to: '#',
          disabled: false,
        },
        {
          id: 'contact',
          title: 'تماس با ما',
          to: '#',
          disabled: false,
        },
        {
          id: 'aftersale',
          title: 'خدمات پس از فروش',
          to: '#',
          disabled: false,
        },
        {
          id: 'blog',
          title: 'بلاگ',
          to: '#',
          disabled: true,
        },
      ],
    },
    {
      id: 'helpcenter',
      title: 'راهنمای سایت',
      children: [
        {
          id: 'rules',
          title: 'قوانین و مقررات',
          to: '#',
          disabled: false,
        },
        {
          id: 'advice',
          title: 'دریافت مشاوره',
          to: '#',
          disabled: false,
        },
        {
          id: 'advices',
          title: 'انتقادات و پیشنهادات',
          to: '#',
          disabled: false,
        },
      ],
    },
    {
      id: 'customer',
      title: 'خدمات مشتریان',
      children: [
        {
          id: 'faq',
          title: 'سوالات متداول',
          to: '#',
          disabled: false,
        },
        {
          id: 'privacy',
          title: 'حریم خصوصی',
          to: '#',
          disabled: false,
        },
        {
          id: 'terms',
          title: 'قوانین و مقررات',
          to: '#',
          disabled: false,
        },
      ],
    },
  ],
} as const;

export { LINKS };
