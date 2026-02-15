let flavors = `vanilla,vanilla,vanilla,strawberry,coffee,coffee`;

let flavorsArray = flavors.split(', ');
//console.log(flavorsArray);

let flavorOrderCount = 0;

for (let i = 0; i < flavorsArray.length; ++i) {
    let currentFlavor = flavorsArray[i];

    if (!flavorOrderCount[currentFlavor]) {
        flavorOrderCount[currentFlavor] = 1;
    }else {
        ++flavorOrderCount[curentFlavor];
    }
}
console.log(flavorOrderCount);