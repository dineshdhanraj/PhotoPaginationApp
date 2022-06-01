import {
  ListAction,
  ErrorAction,
  PageAction,
} from '../actions/PhotoPaginationActions';

const mockDispatch = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

it('Testing for ListAction', async () => {
  await ListAction('')(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});

it('Testing for ErrorAction', async () => {
  await ErrorAction('')(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});

it('Testing for PageAction', async () => {
  await PageAction('')(mockDispatch);
  expect(mockDispatch).toHaveBeenCalledTimes(1);
});
