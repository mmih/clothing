import ShopActionsType from './shop.types';

export const updateCollections = collectionMap => ({
    type: ShopActionsType.UPDATE_COLLECTIONS,
    payload: collectionMap
})