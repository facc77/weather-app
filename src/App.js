import './App.css';
import Sidebar from './components/Sidebar';
import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch(
    'http://api.weatherapi.com/v1',
    '6be8c28794924ed8a2a184922222905',
    'tuc',
  );

  console.log(data, loading, error);
  return (
    <div className='App'>
      <Sidebar />
    </div>
  );
}

export default App;
