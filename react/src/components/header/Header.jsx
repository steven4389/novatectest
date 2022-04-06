import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext';
import './header.scss'

const Header = () => {

    const { page } = useContext(DataContext);

    return (
        <div>
            {page === 'list' &&
                <h4>LISTADO COMENTARIOS</h4>
            }
            {page === 'edit' &&
                <h4>EDICION COMENTARIOS</h4>
            }
            {page === 'create' &&
                <h4>CREACION COMENTARIOS</h4>
            }
        </div>
    )
}

export default Header