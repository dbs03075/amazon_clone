import bcrypt from 'bcryptjs'

const data = {
    users : [
        {
            name:'Basir',
            email:'admn@example.com',
            password: bcrypt.hashSync('12344',8),
            isAdmin: true,
        },
        
        {
            name:'John',
            email:'adin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
        },
    ],

    products:[
        {
            name:'Nike Slim Shiet1',
            category:'Shirts',
            image:'/images/p1.jpg',
            price: 120,
            countInStock: 5,
            brand:'Nike',
            rating: 3,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Adidas Slim Shiet2',
            category:'Shirts',
            image:'/images/p1.jpg',
            price: 120,
            brand:'Adidas',
            countInStock: 10,
            rating: 4.0,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Nike Slim Shiet3',
            category:'Shirts',
            image:'/images/p2.jpg',
            price: 120,
            brand:'Nike',
            countInStock: 10,

            rating: 3,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Lacoste Slim Shiet4',
            category:'Shirts',
            image:'/images/p3.jpg',
            price: 120,
            brand:'Lacoste',
            countInStock: 10,

            rating: 3,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Nike Slim Shiet5',
            category:'Shirts',
            image:'/images/p4.jpg',
            price: 120,
            brand:'Nike',
            countInStock: 0,

            rating: 3,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Nike Slim Shiet6',
            category:'Shirts',
            image:'/images/p5.jpg',
            price: 120,
            brand:'Nike',
            countInStock: 10,

            rating: 3,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Nike Slim Shiet7',
            category:'Shirts',
            image:'/images/p6.jpg',
            price: 120,
            brand:'Nike',
            countInStock: 0,

            rating: 3,
            numReviews:10,
            description:'high quality product',
        },

    ],
};

export default data;