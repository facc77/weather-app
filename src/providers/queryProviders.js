import { 
    createContext, useContext, useState } from 'react';

const queryContext = createContext();
const queryChangeContext = createContext();

export const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState({
        q: 'london',
    });

    return (
        <queryChangeContext.Provider value={setQuery}>
            <queryContext.Provider value={query}>{children}</queryContext.Provider>
        </queryChangeContext.Provider>
    );
};

export const useQueryContext = () => {
    return useContext(queryContext);
};

export const useQueryChangeContext = () => {
    return useContext(queryChangeContext);
};
