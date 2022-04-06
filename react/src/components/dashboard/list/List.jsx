import React, {useContext, useEffect, useState} from 'react';
import { DataContext } from '../../../context/DataContext';
import { list, filter } from '../../../data/Data'
import './list.scss'

const List = () => {

    const { setItemToEdit,  setPage, search} = useContext(DataContext);
    const [commentList, setCommentList] = useState([]);
    
    useEffect(()=>{
        search !== ''? setCommentList(filter(search)) :setCommentList(list()) 
    }, [search])

    const editComment = (item)=>{
        setItemToEdit(item);
        setPage('edit');
    }

    return (
        <div className='listMain'>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Acción</th>
                </tr>
                {commentList.length > 0 &&
                    commentList.map(item => {
                        return (<tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.web !== '' ? item.web : 'N/D'}</td>
                            <td onClick={() => editComment(item)}>Editar</td>
                        </tr>)
                    })
                }


            </table>
        </div>
    )
}

export default List