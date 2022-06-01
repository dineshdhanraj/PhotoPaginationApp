import {StyleSheet} from 'react-native';

const PhotoPaginationStyles = StyleSheet.create({
  MainContent: {
    flex: 1,
  },

  MainContentView: {marginTop: 20, marginLeft: 5, marginRight: 10},

  Heading: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
  },
  Indicator:{
    position:'absolute',
    marginLeft:180,
    marginTop:270
    },
  textstyle: {
    flex: 2,
    fontWeight: 'bold',
    borderRadius: 15,
    borderWidth: 2,
    paddingRight:10,
    width: '50%',
    fontSize: 18,
    paddingLeft: 20,
    justifyContent: 'center',
    color: 'black',
    marginRight: 50,
    backgroundColor: 'lightblue',
  },

  ItemView: {
    marginLeft: 20,
    marginRight: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  seperator: {
    flexDirection: 'row',
    marginTop: 20,
  },

  ListItemView: {
    marginTop: 20,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
  },
  
  Error: {color: 'red', fontSize: 25,marginLeft:140,marginTop:20, marginRight: 50},
});
export default PhotoPaginationStyles;
