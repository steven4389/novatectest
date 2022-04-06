import React, { useContext } from 'react';
import List from './list/List';
import Edit from './edit/Edit';
import Create from './create/Create';
import Search from '../search/Search';
import { DataContext } from '../../context/DataContext';
import './dashboard.scss';

const Dashboard = () => {

  const { page, setPage } = useContext(DataContext);


  return (
    <div className='dashboardMain'>

      {page === 'list' &&
        <div>
          <button onClick={() => setPage('create')}>Agregar comentario</button>
          <Search />
          <List />
        </div>
      }
      {page === 'edit' &&
        <Edit />
      }
      {page === 'create' &&
        <Create />
      }
    </div>
  )
}

export default Dashboard