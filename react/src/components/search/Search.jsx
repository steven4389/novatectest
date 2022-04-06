import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataContext';
import './search.scss'

const Search = () => {

    const { setSearch } = useContext(DataContext);
    const [keyword, setKeyword] = useState('');

    const handleSearch = (e) => {
        setKeyword(e.target.value);
        setSearch(e.target.value)
    }

    return (
        <div className='mainSearch'>
            <input value={keyword} onChange={handleSearch} type="text" />
            <button onClick={()=>setSearch(keyword)} className='searchButton'>Buscar</button>
        </div>
    )
}

export default Search