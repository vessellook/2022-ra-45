import { useMemo } from 'react';
import { getAuthorizationHeader } from '../api';

const useAuthHeader = (token, opts) => {
  return useMemo(() => {
    if (token == null) {
      return opts;
    }

    const headers = {
      ...opts?.headers,
      Authorization: getAuthorizationHeader(token),
    };

    return { ...opts, headers };
  }, [token, opts]);
};

export default useAuthHeader;
