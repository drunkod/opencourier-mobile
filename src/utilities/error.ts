export const handleAPIError = (error: any): string => {
  if (typeof error === 'object' && error !== null) {
    if (
      error.error &&
      (typeof error.error === 'string' || error.error instanceof String)
    ) {
      return error.error;
    }
    return 'API error';
  } else if (typeof error === 'string') {
    return error;
  } else {
    return 'API error';
  }
};
