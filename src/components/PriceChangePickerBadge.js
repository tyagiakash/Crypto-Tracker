import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function PriceChangePickerBadge({item, selectedItem, onPress}) {
  const color = item !== selectedItem ? colors.txtDark : colors.primaryBlue;

  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.bgLight}>
      <View
        style={
          item === selectedItem ? styles.containerActive : styles.container
        }>
        <AppText style={[styles.text, {color: color}]}>{item}</AppText>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 30,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  containerActive: {
    width: 30,
    backgroundColor: colors.primaryBlue + '20',
    padding: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default PriceChangePickerBadge;
