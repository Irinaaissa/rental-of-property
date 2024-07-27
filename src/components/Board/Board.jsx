import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../BoardList/BoardList';
import css from './Board.module.css';
import { fetchCatalogsPage } from '../../redux/catalog/operations';
import {
    selectCatalogs,
    selectCurrentPage,
    selectError,
    selectLoading,
    selectMoreToLoad,
    selectPerPage
} from '../../redux/catalog/selectors';
import { incrementPage, setFilters } from '../../redux/catalog/slice';

export default function Board({ filters }) {
    const dispatch = useDispatch();

    const catalogs = useSelector(selectCatalogs);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const currentPage = useSelector(selectCurrentPage);
    const perPage = useSelector(selectPerPage);
    const moreToLoad = useSelector(selectMoreToLoad);

    useEffect(() => {
        dispatch(fetchCatalogsPage({ page: currentPage, limit: perPage, filters }));
    }, [dispatch, currentPage, perPage, filters]);

    const handleLoadMore = () => {
        dispatch(fetchCatalogsPage({ page: currentPage, limit: perPage, filters }));
        dispatch(incrementPage());
    };

    return (
        <div className={css.board}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {catalogs && catalogs.length > 0 ? (
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
            ) : (
                <p>No catalogs found</p>
            )}
        </div>
    );
}
