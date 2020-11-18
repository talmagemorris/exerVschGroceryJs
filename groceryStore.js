var shopper = {
    name: "Talmage Morris",
    budget: 50.00,
    canShop: true,
    buyItem:  function(item, price){
        if (price > shopper.budget){
            console.log("Not enough money");
            shopper.canShop = false;
            for (var i = 0; i < shopper.shoppingCart.length; i++){
                console.log(shopper.name + " bought " + shopper.shoppingCart[i]);
            }
        } else {
            shopper.budget -= price;
            shopper.shoppingCart.push(item);
            console.log(item + " has been added to shopping cart  " + shopper.name + " has " + shopper.budget + " left");
        }
    },
    shoppingCart: []

}


console.log(shopper.name + " is going to the store");
console.log(shopper.name + " has " + shopper.budget + " dollars to spend");
console.log("get egss...");
shopper.buyItem("eggs", 1.99);
console.log(shopper.name + " has " + shopper.budget + " left");
console.log("Henry picks up a few more things")
shopper.buyItem("pudding", 2.00);
shopper.buyItem("Chocolate cake", 9.00);
shopper.buyItem("Bacon", 5.25);
console.log(shopper.name + " notices candy in the checkout isle");
shopper.buyItem("kit-kat",1.99);
console.log(shopper)