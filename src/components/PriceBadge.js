import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function PriceBadge({change}) {
  const color = change > 0 ? colors.primaryGreen : colors.primaryRed;

  return (
    <View
      style={{
        width: 70,
        alignItems: 'center',
        backgroundColor: color + '30',
        padding: 2,
        borderRadius: 6,
      }}>
      <AppText style={{color: color, fontSize: 16}}>
        {change.toFixed(2)}%
      </AppText>
    </View>
  );
}

export default PriceBadge;
