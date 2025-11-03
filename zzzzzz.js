const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
];

function tp(list){
    total = 0;
    for(i of list){
        if (i.price < 5){
            total =+ i.price*0.95;
        } else {
            total =+ i.price;
        }
    }
    if(total >= 100){
        total = total* 0.9;
    }
}