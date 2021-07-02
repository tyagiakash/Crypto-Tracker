import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import colors from '../config/colors';
import HomeMenu from '../components/HomeMenu';
import SearchBtn from '../components/SearchBtn';
import CryptoHomeItem from '../components/CryptoHomeItem';
import data from '../config/dummyData.json';
import FilterDropDown from '../components/FilterDropDown';
import PriceChangePicker from '../components/PriceChangePicker';
import filterDataByType from '../utils/filterDataByType';

const menuItem = [
  'Top Gainers',
  'Top Loosers',
  'Highest Price',
  'Lowest Price',
];

function HomeScreen(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDropDownFilter, setDDFilter] = useState(menuItem[2]);

  const getFilteredData = () => {
    let result = data;
    result = data.filter(item =>
      item.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()),
    );
    let x = filterDataByType(data, selectedDropDownFilter);
    console.log('hellppp', x);
    return x;
  };

  let filteredResult = getFilteredData();

  return (
    <View style={styles.container}>
      <HomeMenu />
      <View style={{marginVertical: 16}}>
        <SearchBtn setSearchQuery={setSearchQuery} />
      </View>
      <View style={styles.filterContainer}>
        <FilterDropDown
          selectedItem={selectedDropDownFilter}
          setSelectedItem={setDDFilter}
          menuItem={menuItem}
        />
        <PriceChangePicker />
      </View>
      <FlatList
        data={filteredResult}
        keyExtractor={crypto => crypto.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CryptoHomeItem
            imageUri={item.image}
            symbol={item.symbol}
            name={item.name}
            price={item.current_price}
            percentageChange={item.price_change_percentage_24h}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  filterContainer: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default HomeScreen;
