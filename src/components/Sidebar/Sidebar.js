import useFetch from '../../hooks/useFetch';
import './Style.css';
import Col from 'react-bootstrap/Col';
import {
  useQueryChangeContext,
  useQueryContext,
} from '../../providers/queryProviders';

const url = process.env.REACT_APP_WEATHER_URL;
const key = process.env.REACT_APP_API_KEY;

const Sidebar = () => {
  const useQuery = useQueryContext();
  const useChangeQuery = useQueryChangeContext();
  const { data } = useFetch(url, key, useQuery.q, true);

  const handleClick = () => {
    useChangeQuery((prevState) => ({
      ...prevState,
      input: !useQuery.input,
    }));
  };
  return (
    <Col sm='4' className='sidebar'>
      {data ? (
        <>
          <div className='boton-buscador'>
            <button onClick={handleClick}>Search for places</button>
          </div>
          <img src={data.current?.condition?.icon} className='icono-tiempo' />
          <span className='temperatura'>{data.current?.temp_c}°c</span>
          <div className='condicion'>{data.current?.condition?.text}</div>
          <div className='fecha'>{data.location?.localtime}</div>
          <div className='ciudad'>{data.location?.name}</div>
        </>
      ) : (
        <div className='spinner-border text-primary' role='status'>
          <span className='sr-only'></span>
        </div>
      )}
    </Col>
  );
};

export default Sidebar;
