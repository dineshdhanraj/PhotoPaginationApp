function ListSelector(state) {
  return state.ListItem;
}

function ErrorSelector(state) {
  return state.Error;
}

function PageNumberSelector(state) {
  return state.PageNumber;
}

function ItemSelector(state) {
  return state.Item;
}

export {ListSelector, ErrorSelector, PageNumberSelector, ItemSelector};
