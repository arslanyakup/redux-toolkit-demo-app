import React, { memo } from "react"
import { StyleSheet, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import FavoriteBoredListItem from "./FavoriteBoredListItem";

const FavoriteBoredList = ({ showAll }) => {
  const { favoriteBoredList } = useSelector(state => state.app);

  return (
    <FlatList
      scrollEnabled={false}
      ListEmptyComponent={() => <Text style={styles.emptyListAlertText}>Empty Favorite Bored List!</Text>}
      data={showAll ? favoriteBoredList : favoriteBoredList.slice(0, 3)}
      renderItem={({ item }) => <FavoriteBoredListItem item={item} />}
    />
  )
}

const styles = StyleSheet.create({
  emptyListAlertText: {
    textAlign: 'center',
    alignSelf: 'center'
  }
})


export default memo(FavoriteBoredList);