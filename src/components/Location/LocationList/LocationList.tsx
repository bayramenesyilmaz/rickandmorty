import './LocationList.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
}

interface LocationProps {
    locations: Location[];
}

const LocationList: React.FC<LocationProps> = ({ locations }) => {

    return (
        <div className='locations-list'>
            {locations.map(location => (
                <div className='location-card' key={location.id}>
                    <Link to={`/location-detail/${location.id}`} className='location-link'>
                        <h2 className='location-name'>{location.name}</h2>
                        <p className='location-detail'><strong>Type:</strong> {location.type}</p>
                        <p className='location-detail'><strong>Dimension:</strong> {location.dimension}</p>
                        <p className='location-detail'><strong>Residents:</strong> {location.residents.length}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default LocationList;
