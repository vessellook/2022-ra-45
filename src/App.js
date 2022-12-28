import './App.css';
import AuthContext from './AuthContext';
import { useLocalStorageState } from './hooks/useStorageState';
import { useMemo } from 'react';
import ProfileContext from './ProfileContext';
import useProfile from './hooks/useProfile';
import Header from './components/Header';

function App() {
  const [token, setToken] = useLocalStorageState('auth-token');
  const profile = useProfile(token);
  const authValue = useMemo(
    () => ({ token, setToken, guest: token == null }),
    [token, setToken]
  );

  return (
    <AuthContext.Provider value={authValue}>
      <ProfileContext.Provider value={profile}>
        <Header />
      </ProfileContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
