import React, { memo } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { changeDoneStatus, deleteBoredItem } from "../app/appSlice";
import colors from "../utils/colors";

const FavoriteBoredListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={[styles.activityText, { textDecorationLine: item.done && 'line-through' }]} numberOfLines={3}>{item.activity}</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionView} onPress={() => dispatch(changeDoneStatus(item.activity))}>
          <Text style={[styles.actionText, { color: item.done ? colors.ORANGE : colors.GREEN }]}>{item.done ? 'Undone' : 'Done'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionView} onPress={() => dispatch(deleteBoredItem(item.activity))}>
          <Text style={[styles.actionText, { color: colors.RED }]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2
  },
  activityText: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 18,
    margin: 8,
    flex: 1,
    alignSelf: 'center'
  },
  actionContainer: {
    flexDirection: 'row'
  },
  actionView: {
    width: 60,
    justifyContent: 'center'
  },
  actionText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    marginVertical: 8
  }
})


export default memo(FavoriteBoredListItem);