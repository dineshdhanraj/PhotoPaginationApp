import React from 'react';
import * as redux from 'react-redux';
import TestRenderer, {act} from 'react-test-renderer';
import PhotoPaginationItem from '../components/PhotoPaginationItemDetails';

afterEach(() => {
  jest.clearAllMocks();
});

const DummyData = {
  pull_requests: [{title: 'sai', repo_name: 'githubrepo'}],
  artistName: '',
  collectionPrice: '',
  contributions_count: 6,
  organisations: [{title: '1'}, {title: 2}],
};

const SelectorMock = jest.spyOn(redux, 'useSelector');

it('Test for checking Item Details Screen', async () => {
  SelectorMock.mockReturnValueOnce(DummyData);
  var tree;
  await act(async () => {
    tree = TestRenderer.create(<PhotoPaginationItem />);
  });
  const instance = tree.root;
  expect(instance.findByProps({testID: 'Title'})).toBeTruthy();
  expect(instance.findByProps({testID: 'RepoName'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Contributions'})).toBeTruthy();
  expect(instance.findByProps({testID: 'Organisation'})).toBeTruthy();
});
