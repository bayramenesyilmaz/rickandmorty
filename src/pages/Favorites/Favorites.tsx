import './Favorites.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllFavorites, selectAllFavorites, selectTotalFavorites } from '../../redux/favoritesSlice';
import FavoritesList from '../../components/FavoritesList/FavoritesList';


const Favorites: React.FC = () => {
    const dispatch = useDispatch()
    const allFavorites = useSelector(selectAllFavorites);
    const totalFavorites = useSelector(selectTotalFavorites);

    return <div className='fav-container'>
        <h1>Favorites</h1>

        {totalFavorites > 0 && <button className='delete-btn' onClick={() => dispatch(deleteAllFavorites())}>Delete All Favorites</button>
        }
        <div className='fav-content'>
            {
                totalFavorites > 0 ? <FavoritesList characters={allFavorites} />
                    : <div className="empty-favorites">
                        <p>No characters added to favorites yet.</p>
                    </div>
            }
        </div>

    </div>
};

export default Favorites;