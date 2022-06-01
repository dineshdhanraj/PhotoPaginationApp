import React from 'react' 
//import PhotoPaginationList from './src/components/PhotoPaginationList'
import { Provider } from 'react-redux';
import PhotoPaginationStore from './src/store/PhotoPaginationStore';
import PhotoPaginationStackNavigator from './src/navigation/PhotoPaginationStackNavigator';
export default function App(){
  return(
  <Provider store={PhotoPaginationStore}>
  <PhotoPaginationStackNavigator/>
  </Provider>
  
  )
}
//sai