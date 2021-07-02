import {auto} from 'async';
import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import colors from '../config/colors';
import AppText from './AppText';
import DropDownItem from './DropDownItem';

function FilterDropDown({selectedItem, setSelectedItem, menuItem}) {
  const [listVisible, setListVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => setListVisible(true)}>
        <AppText style={styles.text}>{selectedItem + ' '}</AppText>
        <Icon
          name="chevron-down"
          size={20}
          color={colors.primaryBlue}
          style={{marginTop: 3}}
        />
      </TouchableOpacity>
      {listVisible && (
        <View style={styles.dropDownContainer}>
          <FlatList
            data={menuItem}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <DropDownItem
                item={item}
                currentItem={selectedItem}
                onPress={() => {
                  setSelectedItem(item);
                  setListVisible(false);
                }}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: colors.primaryBlue,
    fontSize: 16,
    fontWeight: '700',
  },
  dropDownContainer: {
    position: 'absolute',
    top: 25,
    left: 5,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 2,
    paddingBottom: 6,
    zIndex: 5,
  },
});

export default FilterDropDown;
