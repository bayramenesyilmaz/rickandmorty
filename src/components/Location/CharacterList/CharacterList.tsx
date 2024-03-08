import './CharacterList.css';
import React, { useEffect, useState } from 'react';
import CharacterCard from '../../Character/CharacterCard/CharacterCard';
import useFetch from '../../../hooks/useFetch';
import NotFoundCharacter from '../../Character/NotFoundCharacter/NotFoundCharacter';

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

interface CharacterListProps {
    residents: Character[];
    status: string;
    residentsIds: string[]
}

const CharacterList: React.FC<CharacterListProps> = ({ residents, status, residentsIds }) => {
    const [filteredResidents, setFilteredResidents] = useState<Character[]>(residents);
    const [oneResidents, setOneResidents] = useState<Character | null>(null);

    const { data: characters, error: chErr, loading: chLoading }: { data: any, error: string | null, loading: boolean } = useFetch(`https://rickandmortyapi.com/api/character/${residentsIds}`);


    useEffect(() => {
        const filterResidents = () => {
            let filtered = [];

            if (residentsIds.length <= 1) {
                if (status) {
                    if (characters.status.toLowerCase() === status.toLowerCase()) {
                        setOneResidents(characters)
                    } else {
                        setOneResidents(null)
                    }
                } else {

                    setOneResidents(characters)
                }
                setFilteredResidents([])
                return false
            }

            if (status === "alive") {
                filtered = characters.filter((ch: any) => ch.status.toLowerCase() === "alive");
            } else if (status === "dead") {
                filtered = characters.filter((ch: any) => ch.status.toLowerCase() === "dead");
            } else if (status === "unknown") {
                filtered = characters.filter((ch: any) => ch.status.toLowerCase() === "unknown");
            } else {
                filtered = characters
            }

            setFilteredResidents(filtered);

        };

        filterResidents();

    }, [characters, status, residentsIds])


    return (
        <div className='character-list'>
            {filteredResidents && filteredResidents.length > 0 ? filteredResidents.map((character, i) => (
                <CharacterCard key={i} character={character} />
            )) : oneResidents ? <CharacterCard character={oneResidents} /> : <NotFoundCharacter />}
        </div>
    );
};

export default CharacterList;
