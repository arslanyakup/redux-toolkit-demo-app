import React, { memo } from "react"
import { StyleSheet, View } from 'react-native';
import { FavoriteBoredList } from "../components";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <FavoriteBoredList showAll />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16
  }
})

export default memo(Favorites);