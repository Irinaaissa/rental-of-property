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
    selectPerPage,
    selectFilters
} from '../../redux/catalog/selectors';
import { incrementPage} from '../../redux/catalog/slice';

export default function Board({ filters }) {
    const dispatch = useDispatch();
 
    const catalogs = useSelector(selectCatalogs);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const currentPage = useSelector(selectCurrentPage);
    const perPage = useSelector(selectPerPage);
    const moreToLoad = useSelector(selectMoreToLoad);
    const queryParams = useSelector(selectFilters);
 
    useEffect(() => {
        dispatch(fetchCatalogsPage({ page: currentPage, limit: perPage, filters }));
    }, [dispatch, currentPage, perPage, filters]);
 
    const handleLoadMore = () => {
        dispatch(fetchCatalogsPage({ page: currentPage, limit: perPage, filters }));
        dispatch(incrementPage());
        dispatch(setFilters());
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


// import React from 'react';
// import css from "./Board.module.css";
// 
// export default function Board({ filters }) {
    // console.log("Filters in Board:", filters);
    // 
    // const data = [
        // { name: 'Car1', equipment: ['kitchen', 'radio'] },
        // { name: 'Car2', equipment: ['beds', 'microwave'] },
        // { name: 'Car3', equipment: [ 'beds', 'Alcove'] },
        // 
    // ];
// 
//    
    // const filteredData = data.filter(item =>
        // filters.every(filter => item.equipment.includes(filter))
    // );
// 
    // return (
        // <div className={css.board}>
            {/* {filteredData.map((item, index) => ( */}
                // <div key={index} className={css.item}>
                    {/* <h3>{item.name}</h3> */}
                    {/* <p>Equipment: {item.equipment.join(', ')}</p> */}
                {/* </div> */}
            // ))}
        {/* </div> */}
    // );
// }
