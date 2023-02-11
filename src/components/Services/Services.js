import React, { useEffect, useState } from 'react';
import Servicing from './Servicing';
import './Services.css';
import aru from './../../images/hot-deal-logo.gif'


const Services = () => {
    const [services, setServices] = useState([])
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('https://arafatanjan-ecommerce.onrender.com/services')

            // fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setSearchResult(data)
            })
    }, []);

    // const match = services.filter(d => d.name.toLowerCase().includes(searchText));
    // setSearchResult(match);

    const handleSearchChange = event => {
        setSearchText(event.target.value);
        const match = services.filter(d => d.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(match.length);
        setSearchResult(match);
    }

    return (
        <div>
            <br />
            <div>
                <img className='img-fluid w-20' src={aru} alt="" />
                <ul class="dropdown-menu">
                    <li><h6 class="dropdown-header">Dropdown header</h6></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                </ul>
            </div>

            <div style={{ 'margin': '20px' }}>
                <input type="text" onChange={handleSearchChange} className="input input-bordered input-sm w-full max-w-xs" placeholder='search' />
            </div>
            <div className='service-container ' id="services">
                {
                    searchResult.slice(0, 6).map((service, index) => <Servicing
                        key={service._id}
                        service={service}>
                    </Servicing>)

                }
            </div>
        </div>
    );
};

export default Services;