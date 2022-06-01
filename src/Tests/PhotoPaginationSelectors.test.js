import {
  ListSelector,
  ErrorSelector,
  PageNumberSelector,
  ItemSelector,
} from '../selectors/PhotoPaginationselectors';

const DummyData = {
  ListItem: 'List',
  PageNumber: 1,
  Error: 'Rejected',
  Item: 'ItemDetails',
};

it('Testing Error Data Case', () => {
  const result = ErrorSelector(DummyData);
  expect(result).toEqual('Rejected');
});

it('Testing Listing functionality', () => {
  const result = ListSelector(DummyData);
  expect(result).toEqual('List');
});

it('Testing Item functionality', () => {
  const result = ItemSelector(DummyData);
  expect(result).toEqual('ItemDetails');
});

it('Testing PageNumber Details functionality', () => {
  const result = PageNumberSelector(DummyData);
  expect(result).toEqual(1);
});
