import { useNavigate } from 'react-router-dom';
import './CharacterDetailCard.css';
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

const CharacterDetailCard: React.FC<CharacterProps> = ({ character }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const isFavorite = useSelector((state) => selectFavoriteById(state, character.id));

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(deleteFavorite(character.id));
        } else {
            dispatch(addFavorite(character));
        }
    };

    let status = ""

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
        <div className={`detail-container ${status} `}>

            <button className='back-button' onClick={() => navigate(-1)}>Back</button>

            <div className={`detail-card `}>

                <div className="detail-image">
                    <img
                        src={character.image}
                        alt="character"
                    />
                </div>

                <div className="detail-info">

                    <div className="ch-title">
                        <span className="ch-name">{character.name}</span>
                        <span className={`ch-status ${status}`}>{character.status}</span>
                    </div>

                    <div>

                        <p className="card-title">Origin :</p>
                        <p className="card-subtitle">{character.origin.name}</p>

                        <p className="card-title">Last location :</p>
                        <p className="card-subtitle">{character.location.name}</p>

                        <p className="card-title">Species :</p>
                        <p className="card-subtitle">{character.species}</p>

                        <p className="card-title">Gender :</p>
                        <p className="card-subtitle">{character.gender}</p>

                        <p className="card-title">Episode Count :</p>
                        <p className="card-subtitle">{character.episode.length}</p>

                    </div>

                    <button className={`fav-btn `} onClick={handleToggleFavorite}>
                        {isFavorite ? <HeartActive /> : <HeartPassive />}

                    </button>

                </div>

            </div>
        </div >
    );
};

export default CharacterDetailCard;
