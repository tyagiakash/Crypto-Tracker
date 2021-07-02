import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import HomeMenuButtonGroup from './HomeMenuButtonGroup';

function HomeMenu(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.txt}>INR</AppText>
      <View style={styles.btnContainer}>
        <HomeMenuButtonGroup />
      </View>
      <AppText style={styles.txt}>Edit</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    color: colors.primaryBlue,
    fontWeight: 'bold',
  },
  btnContainer: {
    marginLeft: -50,
  },
});

export default HomeMenu;
