export const saveOrderDetails = (guestId) => {
  const orderDetails = { guestId };
  localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
};

export const getOrderDetails = () => {
  const data = localStorage.getItem("orderDetails");
  return data ? JSON.parse(data) : null;
};

export const removeOrderDetails = () => {
  localStorage.removeItem("orderDetails");
};
