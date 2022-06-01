import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import PhotoPaginationReducer from '../reducer/PhotoPaginationReducer';

const middleware = [thunk];

const PhotoPaginationStore = createStore(
  PhotoPaginationReducer,
  applyMiddleware(...middleware),
);

export default PhotoPaginationStore;
