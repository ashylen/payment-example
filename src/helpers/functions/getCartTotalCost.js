const getTotalCost = items => {
  let total = 0;
  items.forEach(item => {
    total += item.quantity * item.price;
  });

  return total;
};

export default getTotalCost;
