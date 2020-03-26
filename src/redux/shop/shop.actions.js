import ShopActionsTypes from './shop.types';

import {
  firestore,
  convertCollectionSnapshopToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});


export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
})
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapShot => {
      const collectionsMap = convertCollectionSnapshopToMap(snapShot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
