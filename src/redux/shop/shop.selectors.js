import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
	[selectShop],
	(shop) => shop.collection
);

export const selectShopCollectionsForPreview = createSelector(
	[selectShopCollections],
	(collections) =>
		collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectShopCollection = (collectionUrlParam) =>
	createSelector([selectShopCollections], (collections) =>
		collections ? collections[collectionUrlParam] : []
	);

export const selectShopIsFetching = createSelector(
	[selectShop],
	(shop) => shop.isFetching
);

export const selectIsShopCollectionLoaded = createSelector(
	[selectShop],
	(shop) => !!shop.collection
);
