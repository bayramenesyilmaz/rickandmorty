import './CharacterDetail.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import CharacterDetailCard from '../../components/Character/CharacterDetailCard/CharacterDetailCard';

const CharacterDetail: React.FC = () => {
    const { id } = useParams();

    const { data: character, error, loading }: { data: any, error: string | null, loading: boolean } = useFetch(`https://rickandmortyapi.com/api/character/${id}`);


    if (error) {
        return <ErrorPage error={error} />
    }

    if (loading) {
        return <Loading />
    }

    return <div className='cdp-container'>

        {
            character && <CharacterDetailCard character={character} />
        }

    </div>
};

export default CharacterDetail;