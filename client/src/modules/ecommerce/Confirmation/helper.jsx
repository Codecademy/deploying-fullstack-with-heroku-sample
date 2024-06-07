export const getTotalPrice = (cartItems) => {
  let total = 0;
  cartItems.map((data) => {
    total = total + (+data.price.mrp - +data.price.discount) * +data.count;
    return data;
  });
  return total;
};
