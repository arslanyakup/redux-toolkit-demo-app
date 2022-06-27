import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    height: 50,
    borderRadius: 8
  }
})

export default memo(Button);