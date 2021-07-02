import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import PriceBadge from './PriceBadge';

function CryptoHomeItem({imageUri, symbol, name, price, percentageChange}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            source={{uri: imageUri}}
            style={styles.image}
          />
        </View>
        <View style={{marginHorizontal: 8}}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.symbol}>{symbol}</AppText>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <AppText style={styles.price}>
          {'\u20B9' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </AppText>
        <PriceBadge change={percentageChange} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical:8,
    borderColor: colors.bgDark,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  name: {
    color: colors.txtDark,
    fontWeight: 'bold',
    fontSize: 16,
  },
  symbol: {
    color: colors.txtLight,
    textTransform: 'uppercase',
    fontSize: 16,
  },
  price: {
    color: colors.txtDark,
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default CryptoHomeItem;
