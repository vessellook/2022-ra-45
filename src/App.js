import './App.css';
import { getCookie } from './utils';
import Chat from './components/Chat';
import {v4 as uuidv4 } from 'uuid';

function App() {
  let userId = getCookie('userId');
  if (userId == null) {
    userId = uuidv4();
    document.cookie = `userId=${userId}`;
  }

  return <Chat userId={userId} />;
}

export default App;
