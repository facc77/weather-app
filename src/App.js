import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { QueryProvider } from './providers/queryProviders';
import { Contenedor } from './components/Contenedor';



function App() {

    return (
        <QueryProvider>
            <Contenedor />
        </QueryProvider>
    );
}

export default App;
