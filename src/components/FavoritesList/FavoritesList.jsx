import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from "./FavoritesList.module.css";
import { selectCatalogs, selectFavoriteIds } from '../../redux/catalog/selectors';
import Card from '../../components/Card/Card';

export default function FavoritesList() {
    const favoriteIds = useSelector(selectFavoriteIds);
    const catalogs = useSelector(selectCatalogs);

    const favoriteCards = catalogs.filter(card => favoriteIds.includes(card._id));

    return (
        <div className={css.favoritesContainer}>
            <ul className={css.list}>
                {favoriteCards.length > 0 ? (
                    favoriteCards.map(card => (
                        <li className={css.item} key={card._id}>
                            <Card {...card} />
                        </li>
                    ))
                ) : (
                    <Link to="/catalog" className={css.carContainer}>
 <span className={css.accent}>Favorites are not selected, return to the catalog to select!</span></Link> 
                    
                )}
            </ul>
        </div>
    );
}
