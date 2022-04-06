import React, { useContext, useState } from 'react';
import { DataContext } from '../../../context/DataContext';
import { create } from '../../../data/Data';
import './create.scss';

const cleanForm = { name: '', email: '', web: '', comment: '' }

const Create = () => {

    const { page, setPage } = useContext(DataContext);
    const [form, setForm] = useState(cleanForm);
    const [error, setError] = useState('');


    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let internalError = '';
        form.name === '' &&  (internalError = 'El nombre es requerido, ');
        form.email === '' &&  (internalError = 'El email es requerido, ');
        form.comment === '' &&  (internalError = 'El comentario es requerido, ');

        setError(internalError);
        let createOk = false
        internalError === '' &&  (createOk = create(form));
        createOk && setPage('list');
    }

    return (
        <div className='createMain'>
            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <label>Nombre:</label>
                    <input maxlength="35"  onChange={handleInputChange} name='name' type="text" />
                </div>
                <div className='field'>
                    <label>Correo Electrónico:</label>
                    <input onChange={handleInputChange} name='email' type="email" />
                </div>
                <div className='field'>
                    <label>Página Web:</label>
                    <input  onChange={handleInputChange} name='web' type="url" />
                </div>
                <div className='field comment'>
                    <label>Comentario:</label>
                    <textarea maxlength="100" onChange={handleInputChange} name="comment" rows="5" cols="50"></textarea>
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

export default Create