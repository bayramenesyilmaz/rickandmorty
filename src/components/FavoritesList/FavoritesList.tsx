import CharacterCard from '../Character/CharacterCard/CharacterCard';
import './FavoritesList.css';
import React from 'react';

interface FavoritesListProps {
    characters: any;
}


const FavoritesList: React.FC<FavoritesListProps> = ({ characters }) => {

    return (
        <div className='character-list'>
            {characters.map((character: any, i: number) => (
                <CharacterCard key={i} character={character} />
            ))}
        </div>
    );
};

export default FavoritesList;
