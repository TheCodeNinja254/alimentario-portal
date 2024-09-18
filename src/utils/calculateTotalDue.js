const calculateTotalDue = (cartList) => {
  let total = 0;
  if (cartList?.length > 0) {
    // eslint-disable-next-line array-callback-return
    cartList.map((item) => {
      const perItemDue = item?.quantity * item?.productPrice;
      total += perItemDue;
    });
  }
  return total;
};

export default calculateTotalDue;
