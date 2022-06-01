import PhotoPaginationService from '../service/PhotoPaginationService';
import mockAxios from 'axios';

jest.mock('axios');

it('Testing For Successful API call', async () => {
  const DummyData = {Place: 'Hyderabad'};
  mockAxios.get.mockResolvedValue({data: DummyData});
  const result = await PhotoPaginationService();
  expect(result).toStrictEqual(DummyData);
});

it('Testing For Failure API call', async () => {
  const Error = {
    ErrorMessage: 'Not Found',
  };
  mockAxios.get.mockRejectedValue();
  const result = await PhotoPaginationService();
  expect(result).toStrictEqual(Error);
});
