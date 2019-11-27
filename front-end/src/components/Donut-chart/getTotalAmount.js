function getTotalAmount(category, collection) {
  let categoryArr = collection.filter(exp=>{
      return exp.category === category
  })
  let totalAmount = 0;
  categoryArr.map(exp => {
    return totalAmount += exp.price
  })

  return totalAmount
}

export default getTotalAmount;