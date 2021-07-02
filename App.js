import React from 'react';
import {Text, View} from 'react-native';

import HomeMenu from './src/components/HomeMenu';
import HomeMenuButtonGroup from './src/components/HomeMenuButtonGroup';
import SearchBtn from './src/components/SearchBtn';
import CryptoHomeItem from './src/components/CryptoHomeItem';
import HomeScreen from './src/screens/HomeScreen';
import FilterDropDown from './src/components/FilterDropDown';
import PriceChangePicker from './src/components/PriceChangePicker';
import PriceChangePickerBadge from './src/components/PriceChangePickerBadge';

const App = () => {
  return <HomeScreen />;
};

export default App;
