import './LocationDetail.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';

import CharacterList from '../../components/Location/CharacterList/CharacterList';
import ErrorPage from '../ErrorPage/ErrorPage';
import LocationFilter from '../../components/Location/LocationFilter/LocationFilter';

interface Character {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: {
        name: string;
        url: string;
    };
    name: string;
    origin: {
        name: string;
        url: string;
    };
    species: string;
    status: string;
    type: string;
    url: string;
}

const LocationDetail: React.FC = () => {
    const { id } = useParams();

    const [status, setStatus] = useState<string>("");

    const [location, setLocation] = useState<any>(null)
    const [residents, setResidents] = useState<Character[]>([])
    const [residentsIds, setResidentIds] = useState<string[]>([])

    const { data, error, loading }: { data: any, error: string | null, loading: boolean } = useFetch(`https://rickandmortyapi.com/api/location/${id}`);

    const { data: characters, error: chErr, loading: chLoading }: { data: any, error: string | null, loading: boolean } = useFetch(`https://rickandmortyapi.com/api/character/${residentsIds}`);


    useEffect(() => {
        if (data) {

            setLocation(data)

            const ids = data.residents.map((resident: string) => {
                const urlParts = resident.split('/');
                return urlParts[urlParts.length - 1];
            });

            setResidentIds(ids);

        }
    }, [data])

    useEffect(() => {
        if (characters && characters.info && characters.results) {
            setResidents(characters.results)
        }
    }, [characters])


    if (loading) {
        return <Loading />
    }


    return <main className='ldp-container'>
        <h1>{location ? location.name : "Location Name Undefined"}</h1>

        <section>

            <div className='filter-content'>

                <LocationFilter
                    setStatus={setStatus}
                />

                {
                    location && <div className='location-info'>

                        <p className='location-info-date'>{location.type}</p>
                        <p className='location-info-location'>{location.dimension}</p>
                        <p className='location-info-characters'>{location.residents.length} Cahracters </p>
                    </div>
                }

            </div>

            <div className='character-content'>

                {
                    chErr ? <ErrorPage error={chErr} /> :
                        chLoading ? <Loading /> : residents ?

                            <CharacterList residents={residents} status={status} residentsIds={residentsIds} />
                            : null
                }
            </div>


        </section>


    </main>
};

export default LocationDetail;