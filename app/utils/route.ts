import { createError } from 'h3';

const getPositiveRouteParam = (value: unknown, resource = 'Resource'): number => {
  const id = Number(value);

  if (!Number.isInteger(id) || id <= 0) {
    throw createError({
      statusCode: 404,
      statusMessage: `${resource} not found`,
    });
  }

  return id;
};

export { getPositiveRouteParam };
