import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Sidebar } from './components/Sidebar';
import { QueryProvider } from './providers/queryProviders';
import { Main } from './components/Main';

function App() {
    return (
        <QueryProvider>
            <div className='App'>
                <Container>
                    <Row>
                        <Sidebar />
                        <Main/>
                    </Row>
                </Container>
            </div>
        </QueryProvider>
    );
}

export default App;
