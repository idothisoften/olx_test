import { createSelector } from 'reselect'

const currentPageId = (state) => state.ui.currentPage;
const totalPages = (state) => state.ui.totalPages;
const adsHash = (state) => state.data.ads;
const loading = (state) => state.ui.loading;

export const pagerSelector = createSelector(
  currentPageId,
  totalPages,
  (current, total) => ({current, total})
);

export const currentAds = createSelector(
  currentPageId,
  adsHash,
  (current, adsHash) => {
    if (current == null) { return []; }
    const ads = adsHash[current];
    if (ads == null) { return []; }

    return ads;
  }
);

export const currentLoading = createSelector(
  currentPageId,
  loading,
  (current, loading) => {
    const loadingState = loading[current || 'initial'];

    if (loadingState == null) { return false; }

    return loadingState;
  }
);

export const cardsSelector = createSelector(
  currentLoading,
  currentAds,
  (loading, ads) => ({ loading, data: ads })
);
