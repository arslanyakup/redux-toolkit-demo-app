import React, { memo } from "react"
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from "react-redux";
import { addBoredToFavorites } from "../app/appSlice";
import { useGetRandomActivityQuery } from "../app/services";
import { Button, FavoriteBoredList } from "../components";
import colors from "../utils/colors";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const { data, refetch, isFetching } = useGetRandomActivityQuery();

  const onItemAddFavList = () => {
    refetch();
    dispatch(addBoredToFavorites(data));
  }

  return (
    <View style={styles(colors).container}>
      <View style={styles(colors).topView}>
        <View style={styles(colors).boredItemTextContainer}>
          {!isFetching && <Text style={styles(colors).title}>{data.activity}</Text>}
        </View>
        <Button text={'Add Fav List'} onPress={onItemAddFavList} style={styles(colors).addFavButtonContainer} />
        <Button text={'Change'} onPress={refetch} style={styles(colors).changeBoredButtonContainer} />
      </View>
      <View style={styles(colors).bottomView}>
        <Text style={[styles(colors).title, { marginVertical: 16 }]}>Fav Bored List</Text>
        <FavoriteBoredList />
        <Button text={'Show All'} onPress={() => navigation.navigate('Favorites')} style={styles(colors).showAllContainer} />
      </View>
    </View>
  )
}

const styles = (colors) => StyleSheet.create({
  container: {
    flex: 1
  },
  topView: {
    flex: 1,
    justifyContent: 'center'
  },
  bottomView: {
    flex: 1,
    borderTopWidth: 0.3,
    marginHorizontal: 16
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24
  },
  addFavButtonContainer: {
    backgroundColor: colors.ORANGE,
    marginHorizontal: 32
  },
  changeBoredButtonContainer: {
    backgroundColor: colors.RED,
    marginHorizontal: 32
  },
  showAllContainer: {
    backgroundColor: colors.PINK,
    width: 120,
    alignSelf: 'flex-end'
  },
  boredItemTextContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})


export default memo(Home);