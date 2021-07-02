export default function filterDataByType(data, filterType) {
  let result = [...data];
  if (filterType === 'Highest Price')
    result.sort((a, b) => (a.current_price < b.current_price ? 1 : -1));
  else if (filterType === 'Lowest Price')
    result.sort((a, b) => (a.current_price > b.current_price ? 1 : -1));
  else if (filterType === 'Top Gainers')
    result.sort((a, b) =>
      a.price_change_percentage_24h < b.price_change_percentage_24h ? 1 : -1,
    );
  else if (filterType === 'Top Loosers') {
    result.sort((a, b) =>
      a.price_change_percentage_24h < b.price_change_percentage_24h ? 1 : -1,
    );
    result.reverse();
  }

  return result;
}
