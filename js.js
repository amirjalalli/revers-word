var userBasket = [
    {id: 1, name: "labtop", price: 17000000},
    {id: 2, name: "phone", price: 7000000},
    {id: 3, name: "milk", price: 10000},
    {id: 4, name: "water", price: 8000},
    {id: 5, name: "pen", price: 6000},
    {id: 6, name: "coolpaf", price: 800000},
    {id: 7, name: "cable", price: 55000},
    {id: 8, name: "soft water", price: 8000},
    
]


var filterProduct = userBasket.filter(function(product) {
    return product.price < 100000
})

var postCost = filterProduct.length * 1000

// console.log(postCost)
// console.log("filteredProducts: ", filterProduct)
var sum = 0
userBasket.forEach(function(product) {
    sum = sum + product.price
})
var tootalprice = sum + postCost
console.log(tootalprice)