import './App.css';
import { Sidebar } from './components/Sidebar';
import { QueryProvider } from './providers/queryProviders';

function App() {
    return (
        <QueryProvider>
            <div className='App'>
                <Sidebar />
            </div>
        </QueryProvider>
    );
}

export default App;
