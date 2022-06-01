import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList,ActivityIndicator} from 'react-native';
import * as Actions from '../constants/PhotoPaginationConstants';
import {useSelector, useDispatch} from 'react-redux';
import {
  ListAction,
  ErrorAction,
  PageAction,
} from '../actions/PhotoPaginationActions';
import {
  ListSelector,
  ErrorSelector,
  PageNumberSelector,
} from '../selectors/PhotoPaginationSelectors';
import styles from './PhotoPaginationStyles';
import PhotoPaginationUrl from '../config/PhotoPaginationUrl';
import PhotoPaginationService from '../service/PhotoPaginationService';
import {useNavigation} from '@react-navigation/native';

export default function PhotoPaginationList() {
  
  const getListData = useSelector(state => ListSelector(state));
  const getErrorData = useSelector(state => ErrorSelector(state));
  const getPageNumber = useSelector(state => PageNumberSelector(state));

  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function load(url) {
    const List = await PhotoPaginationService(url);
    if (List.ErrorMessage) dispatch(ErrorAction(List.ErrorMessage));
    else {dispatch(ListAction(List))}
  }

  const ListDetails = ({item}) => {
    return (
      <TouchableOpacity
        testID="NavigationOnPress"
        onPress={() => {
          dispatch({type: Actions.ItemData, payload: item}),
            navigation.navigate('ItemDetailsScreen');
        }}>
        <View style={styles.ListItemView}>
          <Text style={styles.ItemView}>{item.id}: {item.nickname}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    load(PhotoPaginationUrl(getPageNumber));
  }, [getPageNumber]);

  function LoadMoreItem() {
    dispatch(PageAction(getPageNumber));
  }

  const RenderLoader=()=> {
    return( <ActivityIndicator 
      size="large"
      color="paleblue"
      />)
  }

  return (
    <View>
      
      {getErrorData ? (
        <Text testID="Error" style={styles.Error}>
        {getErrorData}
        </Text>
      ) : (
        <View >
         
          <View style={styles.seperator}>
            <FlatList
              data={getListData}
              testID="List"
              renderItem={ListDetails}
              onEndReached={LoadMoreItem}
             ListFooterComponent={RenderLoader}
             onEndReachedThreshold={1}
              
            
            />
          </View>
        </View>
      )}
    </View>
  );
}
