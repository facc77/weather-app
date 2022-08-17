import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, key, place = '') {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const completeUrl = `${url}?key=${key}&q=${place}`;

    useEffect(() => {
        axios
            .get(completeUrl)
            .then((res) => {
                setLoading(false);
                setData(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setError('An error occurred', err);
            });
    }, [completeUrl]);

    return { data, loading, error };
}
export default useFetch;
