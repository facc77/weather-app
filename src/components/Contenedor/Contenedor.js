import React from 'react'
import { useQueryContext } from '../../providers/queryProviders';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Sidebar } from '../Sidebar'
import { Main } from '../Main';
import { SidebarBuscador } from '../SidebarBuscador';


const Contenedor = () => {
    const useQuery = useQueryContext()
    return (
        <div className='App'>
            <Container>
                <Row>
                    {!useQuery?.input ? <Sidebar /> : <SidebarBuscador/>}  
                    <Main/>
                </Row>
            </Container>
        </div>
    )
}

export default Contenedor