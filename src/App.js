import { dataEndpoint, loadingEndpoint, errorEndpoint } from './api';
import './App.css';
import Status from './components/Status';

function App() {
  return (
    <div>
      <Status endpoint={dataEndpoint} />
      <Status endpoint={loadingEndpoint} />
      <Status endpoint={errorEndpoint} />
    </div>
  );
}

export default App;
