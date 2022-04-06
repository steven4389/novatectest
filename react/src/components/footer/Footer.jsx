import React, { useEffect, useState } from 'react';
import { axiosClient } from '../../config/axiosClient';
import './footer.scss';

const Footer = () => {

    const [version, setVersion] = useState('')

    useEffect(() => {
        getVersion();
    }, [])

    const getVersion = async () => {
        const response = await axiosClient.get('version');
        setVersion(response.data.version)
    }

    return (
        <div className='footerMain'>
            {version !== '' &&
                <div>{version}</div>
            }
        </div>
    )
}

export default Footer