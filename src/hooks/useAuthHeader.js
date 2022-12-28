import { useMemo } from 'react';
import { getAuthenticationHeader } from '../api';

const useAuthHeader = (token, opts) => {
  return useMemo(() => {
    if (token == null) {
      return opts;
    }

    const headers = {
      ...opts?.headers,
      Authentication: getAuthenticationHeader(token),
    };

    return { ...opts, headers };
  }, [token, opts]);
};

export default useAuthHeader;
