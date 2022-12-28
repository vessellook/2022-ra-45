import { useMemo } from 'react';

const useAuthHeader = (token, opts) => {
  return useMemo(() => {
    if (guest) {
      return opts;
    }

    if (opts == null) {
      opts = {};
    }
    const headers = {
      ...opts.headers,
      Authentication: getAuthenticationHeader(token),
    };

    return { ...opts, headers };
  }, [token, opts]);
};

export default useAuthHeader;
