type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type RequestBody = Record<string, unknown> | FormData | undefined;

type RequestConfig<B extends RequestBody = RequestBody> = {
  url: string;
  method?: RequestMethod;
  body?: B;
};

export const Fetch = async <T, B extends RequestBody = RequestBody>({
  url,
  method = 'GET',
  body,
}: RequestConfig<B>): Promise<T> => {
  const config = useRuntimeConfig();
  return await $fetch<T>(`${config.public.apiBase}${url}`, {
    method,
    body,
  });
};
