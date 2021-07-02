import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function HomeMenuButtonGroup(props) {
  const [activeBtn, setActiveBtn] = useState('fav');

  const handleOnPress = () => {
    if (activeBtn === 'fav') return setActiveBtn('all');
    setActiveBtn('fav');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          activeBtn === 'fav' ? styles.activeContainer : styles.btnContainer
        }
        onPress={handleOnPress}>
        <AppText
          style={activeBtn === 'fav' ? styles.activeText : styles.btnText}>
          Favourite
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          activeBtn !== 'fav' ? styles.activeContainer : styles.btnContainer
        }
        onPress={handleOnPress}>
        <AppText
          style={activeBtn !== 'fav' ? styles.activeText : styles.btnText}>
          All Coins
        </AppText>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 100,
    flexDirection: 'row',
  },
  btnContainer: {
    backgroundColor: colors.bgDark,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  activeContainer: {
    backgroundColor: colors.primaryBlue,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
  },
  activeText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeMenuButtonGroup;
