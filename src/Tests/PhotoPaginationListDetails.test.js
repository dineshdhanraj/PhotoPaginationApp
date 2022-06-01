import React from 'react';
import * as redux from 'react-redux';
import TestRenderer, {act} from 'react-test-renderer';
import PhotoPaginationList from '../components/PhotoPaginationListDetails';
import PhotoPaginationService from '../service/PhotoPaginationService';

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();
jest.mock('../actions/PhotoPaginationActions');
jest.mock('../service/PhotoPaginationService');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockNavigate}),
}));

afterEach(() => {
  jest.resetAllMocks();
});

const DispatchMock = jest.spyOn(redux, 'useDispatch');
const SelectorMock = jest.spyOn(redux, 'useSelector');

const DummyDataSet1 = {
  ListItem: [{nickname: 'sai', id: 1}],
  Error: '',
  PageNumber: 1,
  Item: '',
};

const DummyDataSet2 = {
  ListItem: [{nickname: 'sai', id: 1}],
  Error: 'Rejected',
  PageNumber: 1,
  Item: '',
};

it('Testing for Successful data retrive from API', async () => {
  DispatchMock.mockReturnValue(mockDispatch);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.ListItem);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.Error);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.PageNumber);
  PhotoPaginationService.mockReturnValueOnce('www');
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<PhotoPaginationList />);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'List'})).toBeTruthy();
});

it('Testing When Api Failures', async () => {
  DispatchMock.mockReturnValue(mockDispatch);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.ListItem);
  SelectorMock.mockReturnValueOnce(DummyDataSet2.Error);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.PageNumber);
  PhotoPaginationService.mockReturnValueOnce('www');
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<PhotoPaginationList />);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'Error'})).toBeTruthy();
});

it('Testing Navigation', async () => {
  DispatchMock.mockReturnValue(mockDispatch);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.ListItem);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.Error);
  SelectorMock.mockReturnValueOnce(DummyDataSet1.PageNumber);
  PhotoPaginationService.mockReturnValueOnce('www');
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<PhotoPaginationList />);
  });
  const instance = tree.root;
  expect(mockNavigate).toHaveBeenCalledTimes(0);
  const wrapper = instance.findAllByProps({testID: 'NavigationOnPress'});
  await act(async () => {
    wrapper[0].props.onPress();
  });
  expect(mockNavigate).toHaveBeenCalledTimes(1);
});
