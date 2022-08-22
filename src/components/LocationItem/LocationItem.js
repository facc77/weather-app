import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { useQueryChangeContext } from '../../providers/queryProviders';
import './style.css';

const LocationItem = ({ lugar }) => {
  const useQueryChange = useQueryChangeContext();

  const selectLocation = () => {
    useQueryChange({
      input: false,
      q: lugar.name,
    });
  };
  return (
    <div className='searchItem' onClick={() => selectLocation()}>
      <p>{lugar.name}</p>
      <p>{'>'}</p>
    </div>
  );
};

LocationItem.propTypes = {
  lugar: PropTypes.object.isRequired,
};

export default LocationItem;
