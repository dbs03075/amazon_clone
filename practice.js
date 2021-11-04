// const a = 10;

// a> 9 && console.log(a);
// a< 9 || console.log(a);

// const array = [1,2,6,3];
// const newArray = [...array];
// console.log(newArray);

// // const array2 = 10;
// const nweArray =[...Array(100).keys()];
// console.log(...array.keys())
// console.log(nweArray);
const item ={name: 'Nike Slim Shiet', image: '/images/p2.jpg', price: 120, countInStock: 10, product: '3'}
const existItem = {name: 'Nike Slim Shiet', image: '/images/p2.jpg', price: 120, countInStock: 10, product: '3'};
const state = {
    cartItems:[
        {name: 'Nike Slim Shiet', image: '/images/p2.jpg', price: 120, countInStock: 10, product: '3'}
        ,{name: 'Nike Slim Shiet', image: '/images/p1.jpg', price: 120, countInStock: 5, product: '1'}

    ]
}

console.log(state);
console.log({...state});
// console.log(3)
// console.log( {...state, cartItems: [...state.cartItems, item]});

console.log(4)
console.log( {
    // js rest parameter와 spread operator
    ...state,
    cartItems: state.cartItems.map((x)=>
    x.product === existItem.product ? item :x),
});