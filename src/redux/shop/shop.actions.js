import ShopActionsType from './shop.types';

import { firestore, convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionsType.FETCH_COLLECTION_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionsType.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionsType.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then((snapshot) => {
                const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
    };
};