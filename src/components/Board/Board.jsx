import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../BoardList/BoardList';
import css from './Board.module.css';
import { fetchCatalogsPage } from '../../redux/catalog/operations';
import {
    selectCatalogs,
    selectCurrentPage,
    selectError,
    selectFilters,
    selectLoading,
    selectMoreToLoad,
    selectPerPage
} from '../../redux/catalog/selectors';
import { incrementPage } from '../../redux/catalog/slice';

export default function Board() {
    const dispatch = useDispatch();

    // Using selectors to retrieve data from Redux state
    const catalogs = useSelector(selectCatalogs);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const currentPage = useSelector(selectCurrentPage);
    const perPage = useSelector(selectPerPage);
    const moreToLoad = useSelector(selectMoreToLoad);
    const filters = useSelector(selectFilters);

    // Logging for debugging purposes
    useEffect(() => {
        console.log("Current State:", { catalogs, loading, error, currentPage, perPage, moreToLoad, filters });
    }, [catalogs, loading, error, currentPage, perPage, moreToLoad, filters]);

    // Initiating async action on component mount
    useEffect(() => {
        dispatch(fetchCatalogsPage({ page: currentPage, limit: perPage, filters }));
    }, [dispatch, currentPage, perPage, filters]);

    
    
    
    
    
    const handleLoadMore = () => {
        dispatch(fetchCatalogsPage({ page: currentPage, limit: perPage, filters }));
        dispatch(incrementPage());
    };

    const [filtersOpen, setFiltersOpen] = useState(false);
    const handleFilters = () => {
        setFiltersOpen(!filtersOpen);
    };

    return (
        <div className={css.board}>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    {catalogs && (  // Перевірка на наявність catalogs перед використанням
      <>
        <BoardList catalogs={catalogs} />
        {moreToLoad && (
          <div className={css.buttonContainer}>
            <button className={css.buttonLoad} onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}
      </>
    )}
  </div>
    );
}
