import './App.css';
import AuthContext from './AuthContext';
import { useLocalStorageState } from './hooks/useStorageState';
import { useCallback, useMemo } from 'react';
import ProfileContext from './ProfileContext';
import useProfile from './hooks/useProfile';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const [token, setToken] = useLocalStorageState('auth-token');
  const logout = useCallback(() => setToken(null), [setToken]);
  const profile = useProfile(token, logout);
  const authValue = useMemo(
    () => ({ token, setToken, guest: token == null, logout }),
    [token, setToken, logout]
  );

  return (
    <AuthContext.Provider value={authValue}>
      <ProfileContext.Provider value={profile}>
        <Header />
        <Body />
      </ProfileContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
