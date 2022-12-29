import { useEffect } from 'react';
import useJsonFetch from './useJsonFetch';
import useAuthHeader from './useAuthHeader';
import { profileEndpoint } from '../api';
import { useLocalStorageState } from './useStorageState';
import useJsonStateProxy from './useJsonStateProxy';
import { HttpError } from '../errors';

const useProfile = (token, logout, key = 'profile') => {
  const opts = useAuthHeader(token);
  const [fetchedProfile, loading, error] = useJsonFetch(profileEndpoint, opts, {
    skip: token == null,
  });
  const [profileRaw, setProfileRaw] = useLocalStorageState(key);
  const [profile, setProfile] = useJsonStateProxy(profileRaw, setProfileRaw);

  useEffect(() => {
    if (!loading && !error) {
      setProfile(fetchedProfile);
    }
    if (error && error instanceof HttpError && error.code === 401) {
      logout();
    }
  }, [fetchedProfile, loading, error, setProfile, logout]);

  return profile;
};

export default useProfile;
