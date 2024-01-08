export const getFilterPrice = teachers => {
  const allPrices = teachers.map(teacher => teacher.price_per_hour);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  let priceList = [];
  for (let i = minPrice; i <= maxPrice; i += 5) {
    priceList.push(i);
  }
  return priceList;
};
