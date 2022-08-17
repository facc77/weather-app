import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useQueryContext } from '../../providers/queryProviders'


const Sidebar = () => {
    const useQuery = useQueryContext()

    const { data, loading, error } = useFetch(
        'http://api.weatherapi.com/v1/current.json',
        '6be8c28794924ed8a2a184922222905',
        useQuery.q,
    );
    console.log(data, loading, error);

    return <div className=''>
      sidebar
    </div>;
};

export default Sidebar;
