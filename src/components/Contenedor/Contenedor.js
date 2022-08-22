import React from 'react';
import { useQueryContext } from '../../providers/queryProviders';
import Row from 'react-bootstrap/Row';
import { Sidebar } from '../Sidebar';
import { Main } from '../Main';
import { SidebarBuscador } from '../SidebarBuscador';

const Contenedor = () => {
  const useQuery = useQueryContext();
  return (
    <div className='queryContainer'>
      <Row>
        {!useQuery?.input ? <Sidebar /> : <SidebarBuscador />}
        <Main />
      </Row>
    </div>
  );
};

export default Contenedor;
