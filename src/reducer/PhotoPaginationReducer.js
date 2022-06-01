import * as Actions from '../constants/PhotoPaginationConstants';

const initialDetails = {
  ListItem: [],
  Error: '',
  PageNumber: 1,
  Item:{},
 
};

export default function PhotoPaginationReducer(state = initialDetails, action) {
  switch (action.type) {
    case Actions.ListDetails:
      return {...state, ListItem: state.ListItem.concat(action.payload)};
    case Actions.PageCount:
      return {...state, PageNumber: action.payload + 1};
    case Actions.ErrorDetails:
      return {...state, Error: action.payload};
    case Actions.ItemData:
      return {...state, Item: action.payload};
   
    default:
      return state;
  }
}
