import './CharacterCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite, selectFavoriteById } from '../../../redux/favoritesSlice';
import HeartActive from '../../HeartActive';
import HeartPassive from '../../HeartPassive';

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

interface CharacterProps {
    character: Character;
}

const CharacterCard: React.FC<CharacterProps> = ({ character }: { character: Character }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector((state) => selectFavoriteById(state, character.id));

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(deleteFavorite(character.id));
        } else {
            dispatch(addFavorite(character));
        }
    };

    let status = "";

    if (character) {

        if (character.status === "Alive") {
            status = "ch-status-alive";
        } else if (character.status === "Dead") {
            status = "ch-status-dead";
        } else if (character.status === "unknown") {
            status = "ch-status-unknown";
        }
    }


    return (

        <div className='character-card'>
            <div className="ch-image">
                <img
                    src={character.image}
                    alt="character"
                />
            </div>

            <div className="ch-info">
                <div className="ch-title">
                    <span className="ch-name">{character.name}</span>
                    <span className={`ch-status ${status ? status : ""}`}>{character.status}</span>
                </div>
                <p className="location-title">Last location :</p>
                <p className="location">{character.location.name}</p>
            </div>

            <div className="button-group">

                <Link className="router-link detail-btn" to={`/character-detail/${character.id}`}>Detail
                </Link>
                <button className={`fav-btn `} onClick={handleToggleFavorite}>
                    {isFavorite ? <HeartActive /> : <HeartPassive />}
                </button>
            </div>
        </div>

    );
};

export default CharacterCard;
