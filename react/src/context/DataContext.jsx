import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [page,setPage] = useState('list');
    const [itemToEdit,setItemToEdit] = useState('');
    const [search,setSearch] = useState('');

    return(
        <DataContext.Provider value={{
            page,
            setPage,
            itemToEdit,
            setItemToEdit,
            search,
            setSearch
        }}>
            {children}
        </DataContext.Provider>
    )


};