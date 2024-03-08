import './CharacterList.css';
import React from 'react';
import CharacterCard from '../../Character/CharacterCard/CharacterCard';

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
    characters: Character[];
}


const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {

    return (
        <div className='character-list'>
            {characters.map((character, i) => (
                <CharacterCard key={i} character={character} />
            ))}
        </div>
    );
};

export default CharacterList;
