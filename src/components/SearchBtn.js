import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SearchBtn({setSearchQuery}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name="search" size={20} color={colors.txtDark} />
      </View>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={text => setSearchQuery(text)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.bgDark,
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: colors.txtDark,
    width: '100%',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default SearchBtn;
