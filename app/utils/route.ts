import { createError } from 'h3';

const getPositiveRouteParam = (value: unknown, resource = 'Resource'): number => {
  const id = Number(value);

  if (!Number.isInteger(id) || id <= 0) {
    throw createError({
      status: 404,
      message: `${resource} not found`,
    });
  }

  return id;
};

export { getPositiveRouteParam };
