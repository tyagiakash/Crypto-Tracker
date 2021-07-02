import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Icon from 'react-native-vector-icons/MaterialIcons';

function DropDownItem({item, currentItem, onPress}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.bgLight}>
      <View style={styles.container}>
        <AppText style={styles.text}>{item}</AppText>
        {currentItem === item && (
          <View style={{marginLeft: 8}}>
            <Icon name="check" size={18} color={colors.primaryBlue} />
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderBottomWidth: 1,
    borderColor: colors.bgDark,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: colors.txtDark,
  },
});

export default DropDownItem;
