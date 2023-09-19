let products = [
  {
    name: "Product",
    price: 4321,
    discount: 10,
  },
  {
    name: "Product 1",
    price: 2000,
    discount: 20,
  },
  {
    name: "Product 2",
    price: 1000,
    discount: 15,
  },
];

// for(let i=0; i<products.length; i++){
//     // products[i].discountAmt = products[i].price * products[i].discount/100;
//     // products[i].afterDis = products[i].price - products[i].discountAmt;
//     let prod = products[i];
//     if(prod){  //if cond to prevent access of empty index
//         prod.discountAmt = prod.price * prod.discount/100;
//         prod.afterDis = prod.price - prod.discountAmt;
//     }
// }

// for(let index in products){
//     let prod = products[i];
//     prod.discountAmt = prod.price * prod.discount/100;
//     prod.afterDis = prod.price - prod.discountAmt;
// }

for (let prod of products) {
  if (prod) {
    prod.discountAmt = (prod.price * prod.discount) / 100;
    prod.afterDis = prod.price - prod.discountAmt;
  }
}

console.log(products);

let geoShapes = [
  {
    length: 3,
    width: 4,
  },
  {
    radius: 4,
  },
  {
    length: 3,
    width: 5,
  },
];

//create a loop (using for, for in , for of) to access the array
// assign the area to the elements
//consider, if radius => circle, if length and width = reactangle , if only length = square
// circle = 22/7 *rsq
// reatangle = l*w
//square = lsq

for (let i = 0; i < geoShapes.length; i++) {
  let dim = geoShapes[i];
  if (dim) {
    if (dim.length && dim.width) {
      dim.area = dim.length * dim.width;
    } else if (dim.length) {
      dim.area = dim.length * dim.length;
    } else {
      dim.area = (22 / 7) * dim.radius * dim.radius;
    }
  }
}

for (let index in geoShapes) {
  let dim = geoShapes[index];
  if (dim.radius) {
    dim.area = (22 / 7) * dim.radius ** 2;
  } else if (!dim.width) {
    dim.area = dim.length * dim.length;
  } else {
    dim.area = dim.length * dim.width;
  }
}

for (let dim of geoShapes) {
  if (dim) {
    if (dim.length && dim.width) {
      dim.area = dim.length * dim.width;
    } else if (dim.length) {
      dim.area = dim.length * dim.length;
    } else {
      dim.area = (22 / 7) * dim.radius ** 2;
    }
  }
}

console.log(geoShapes)