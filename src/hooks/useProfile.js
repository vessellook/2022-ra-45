const useProfile = (token, key = 'profile') => {
  const opts = useAuthHeader(token);
  const [fetchedProfile, loading, error] = useJsonFetch(
    profileEndpoint,
    opts,
    { skip: token == null }
  );
  const [profileRaw, setProfileRaw] = useLocalStorageState(key);
  const [profile, setProfile] = useJsonStateProxy(profileRaw, setProfileRaw);

  useEffect(() => {
    if (!loading && !error) {
      setProfile(fetchedProfile);
    }
  }, [fetchedProfile, loading, error]);

  return profile;
}

export default useProfile;
