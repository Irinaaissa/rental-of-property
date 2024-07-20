
// import { createSelector } from 'reselect';

export const selectCatalogState = state => state.catalogs;
export const selectCatalogs =(state) => state.catalogs.items;
export const selectLoading = (state)=> state.catalogs.loading;
export const selectFavoriteIds=(state)=>state.catalogs.favorites;
export const selectError = (state)=>state.catalogs.error;
export const selectFilters = (state) =>state.catalogs.filters;
export const selectMoreToLoad =(state)=>state.catalogs.moreToLoad;
export const selectCurrentPage = (state)=>state.catalogs.currentPage;
export const selectPerPage =(state)=>state.catalogs.perPage;




// export const selectCatalogs = createSelector(
    // [selectCatalogState],
    // catalogs => catalogs ? catalogs.items : []
// );
// 
// export const selectLoading = createSelector(
    // [selectCatalogState],
    // catalogs => catalogs.loading
// );


// export const selectFavoriteIds = createSelector(
    // [selectCatalogState],
    // catalogs => catalogs.favorites
// );

// export const selectCurrentPage = createSelector(
    // [selectCatalogState],
    // catalogs => catalogs.currentPage
// );


// export const selectPerPage = createSelector(
    // [selectCatalogState],
    // catalogs => catalogs.perPage
// );

// export const selectMoreToLoad = createSelector(
    // [selectCatalogState],
    // catalogs => catalogs.moreToLoad
// );

// export const selectFilters = createSelector(
    // [selectCatalogState],
    // catalogs => catalogs.filters
// );

// export const selectError = createSelector(
    // [selectCatalogState],
    // catalogs => catalogs.error
// );