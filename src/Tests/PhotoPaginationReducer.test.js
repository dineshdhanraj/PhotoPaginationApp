import * as Actions from '../constants/PhotoPaginationConstants';
import PhotoPaginationReducer from '../reducer/PhotoPaginationReducer';

const initialState = {
  ListItem: [],
  Error: '',
  PageNumber: 1,
  Item: '',
};
const DummyData = {
  Data: [{nickname: 'sai'}],
  PageNumber: 1,
  Error: 'Rejected',
  ItemDetails: {contirbutions: 6},
};

it('Testing ListDetails State ', () => {
  const result = PhotoPaginationReducer(initialState, {
    type: Actions.ListDetails,
    payload: DummyData.Data,
  });
  expect(result.ListItem.nickname).toEqual(DummyData.Data.nickname);
});

it('Testing PageNumber State', () => {
  const result = PhotoPaginationReducer(initialState, {
    type: Actions.PageCount,
    payload: DummyData.PageNumber,
  });
  expect(result.PageNumber).toEqual(2);
});

it('Testing Error State', () => {
  const result = PhotoPaginationReducer(initialState, {
    type: Actions.ErrorDetails,
    payload: DummyData.Error,
  });
  expect(result.Error).toEqual(DummyData.Error);
});

it('Testing Item Details State', () => {
  const result = PhotoPaginationReducer(initialState, {
    type: Actions.ItemData,
    payload: DummyData.ItemDetails,
  });
  expect(result.Item.contirbutions).toEqual(
    DummyData.ItemDetails.contirbutions,
  );
});
