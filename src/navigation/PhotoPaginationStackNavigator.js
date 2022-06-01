import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PhotoPaginationItem from '../components/PhotoPaginationItemDetails';
import PhotoPaginationList from '../components/PhotoPaginationListDetails';
import {ItemSelector} from '../selectors/PhotoPaginationSelectors';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const PhotoPaginationStackNavigator = () => {
  
const list = useSelector(state => ItemSelector(state));

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={PhotoPaginationList}
          options={{
            title: 'PR Coding Contest',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {fontSize: 25, fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name={'ItemDetailsScreen'}
          component={PhotoPaginationItem}
          options={{
            title: list.nickname,
            headerTitleStyle: {
              fontSize: 15,
            },
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default PhotoPaginationStackNavigator;
