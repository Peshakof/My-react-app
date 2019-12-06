function calculateTotalAmount(data) {
  let total = 0;
  data.map((item) => {
    return total += item.price;
  })
  return total;
}


export default calculateTotalAmount;