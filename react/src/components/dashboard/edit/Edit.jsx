import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../context/DataContext';
import { edit } from '../../../data/Data'
import './edit.scss';

const Edit = () => {

    const { itemToEdit } = useContext(DataContext);

    const { setPage } = useContext(DataContext);
    const [form, setForm] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setForm(itemToEdit);
    }, [])

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let internalError = '';
        form.name === '' && (internalError = 'El nombre es requerido, ');
        form.email === '' && (internalError = 'El email es requerido, ');
        form.comment === '' && (internalError = 'El comentario es requerido, ');

        setError(internalError);
        internalError === '' && edit(form);
        setPage('list');
    }


    return (
        <div className='editMain'>
            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <label>Nombre:</label>
                    <input value={form.name} onChange={handleInputChange} name='name' type="text" />
                </div>
                <div className='field'>
                    <label>Correo Electrónico:</label>
                    <input value={form.email} onChange={handleInputChange} name='email' type="email" />
                </div>
                <div className='field'>
                    <label>Página Web:</label>
                    <input value={form.web} onChange={handleInputChange} name='web' type="text" />
                </div>
                <div className='field comment'>
                    <label>Comentario:</label>
                    <textarea value={form.comment} onChange={handleInputChange} name="comment" rows="5" cols="50"></textarea>
                </div>
                <div>
                    <button type="submit">Guardar</button>
                    <button onClick={() => setPage('list')}>Regresar</button>
                </div>
            </form>
            {error !== '' &&
                <div>
                    {error}
                </div>
            }
        </div>
    )
}

export default Edit