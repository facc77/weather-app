import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { LocationItem } from '../LocationItem';
import './styles.css';

const SidebarBuscador = () => {
  const [location, setLocation] = useState('');
  const [lugares, setLugares] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getLugares();
  };

  const getLugares = async () => {
    const res = await axios(
      `http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=${location}`,
    );
    setLugares(res.data);
  };

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
        {lugares?.map((lugar, index) => {
          return <LocationItem key={index} lugar={lugar} />;
        })}
      </div>
    </Col>
  );
};

export default SidebarBuscador;
