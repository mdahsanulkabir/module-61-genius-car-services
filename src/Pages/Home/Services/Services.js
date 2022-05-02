import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    
    const [services, setSertices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setSertices(data))
    },[])

    return (
        <div className='container'>
            <div className="row">
                <h1 className='mt-5 text-primary text-center'>Our Services</h1>
                <div className='services-container'>
                    {
                        services.map(service => <Service 
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Services;