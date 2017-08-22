/**
 * Created by lee on 7/20/17.
 */
inventory = [
    {name: "A", amount: 3.50 },
    {name: "B", amount: 2 },
];

function add(name,amount) {
    var flag = true;
    for(var i =0; i< inventory.length; i++) {
        if(inventory[i].name == name) {
            inventory[i].amount = (inventory[i].amount + amount)/2;
            flag = false;
            break;

        }
    }

if(flag){
        inventory.push({
            name: name,
            amount: amount
        })
    }
}

add("B",6);
console.log(inventory)