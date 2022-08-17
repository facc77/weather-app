import useFetch from '../../hooks/useFetch';
import './Style.css'
import Col from 'react-bootstrap/Col';
import { useQueryContext } from '../../providers/queryProviders';

const Sidebar = () => {
    const useQuery = useQueryContext();

    const { data, loading, error } = useFetch(
        'http://api.weatherapi.com/v1/current.json',
        '6be8c28794924ed8a2a184922222905',
        useQuery.q
    );
    console.log(data, loading, error);

    return (
        <Col sm='4' className='sidebar'>
            <div className="boton-buscador">
                <button>Search for places</button>
            </div>
            <img src={data?.current?.condition?.icon} className="icono-tiempo"/>
            <span className="temperatura">{data?.current?.temp_c}°c</span>
            <div className="condicion">{data?.current?.condition?.text}</div>
            <div className="fecha">{data?.location?.localtime}</div>
            <div className="ciudad">{data?.location?.region}</div>
        </Col>
    );
};

export default Sidebar;
