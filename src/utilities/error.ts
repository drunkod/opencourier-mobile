export const handleAPIError = (error: any): string => {
  if (typeof error === 'object' && error !== null) {
    if (
      error.error &&
      (typeof error.error === 'string' || error.error instanceof String)
    ) {
      return error.error;
    }

    if (
      error.message &&
      (typeof error.message === 'string' ||
        error.message instanceof String)
    ) {
      return error.message;
    }

    if (
      error.error &&
      error.error?.message &&
      (typeof error.error?.message === 'string' ||
        error.error?.message instanceof String)
    ) {
      return error.error?.message;
    }
    
    return 'API error';
  } else if (typeof error === 'string') {
    return error;
  } else {
    return 'API error';
  }
};
