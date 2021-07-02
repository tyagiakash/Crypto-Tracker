import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TouchableHighlight} from 'react-native';
import PriceChangePickerBadge from './PriceChangePickerBadge';

const priceItem = ['1H', '1D', '1W', '1M'];

function PriceChangePicker(props) {
  const [selectedItem, setSelectedItem] = useState(priceItem[1]);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={priceItem}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PriceChangePickerBadge
            item={item}
            selectedItem={selectedItem}
            onPress={() => setSelectedItem(item)}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default PriceChangePicker;
