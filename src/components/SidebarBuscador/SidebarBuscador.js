import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { LocationItem } from '../LocationItem';
import useFetch from '../../hooks/useFetch';
import './styles.css';

const url = process.env.REACT_APP_SEARCH_URL;
const key = process.env.REACT_APP_API_KEY;

const SidebarBuscador = () => {
  const [location, setLocation] = useState('');
  const [lugares, setLugares] = useState([]);
  const [submit, setSubmit] = useState(false);
  const { data } = useFetch(url, key, location, true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  if (submit) {
    setLugares(data);
    setSubmit(false);
  }

  return (
    <Col className='SidebarBuscador'>
      <form className='input-group mb-3 ' onSubmit={handleSubmit}>
        <input
          className='form-control input-style'
          list='datalistOptions'
          id='exampleDataList'
          placeholder='Type to search...'
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-outline-secondary search-button'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
      <div className='searchList'>
        {lugares?.slice(0, 7).map((lugar, index) => {
          return <LocationItem key={index} lugar={lugar} />;
        })}
      </div>
    </Col>
  );
};

export default SidebarBuscador;
