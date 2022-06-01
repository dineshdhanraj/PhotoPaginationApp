import * as Actions from '../constants/PhotoPaginationConstants';

export const ListAction = (ListData) => {
  return async (dispatch) => {
    dispatch({type: Actions.ListDetails, payload: ListData});
  };
};

export const ErrorAction = (ErrorData) => {
  return async (dispatch) => {
    dispatch({type: Actions.ErrorDetails, payload: ErrorData});
  };
};

export const PageAction = (PageData) => {
  return async (dispatch) => {
    dispatch({type: Actions.PageCount, payload: PageData});
  };
};
