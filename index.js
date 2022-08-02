
const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './templates/views')

//const userData = [
//    {
//        id: "1",
//        name: "Lucas",
//        email: "lucasl@codingtemple.com",
//        favoriteColor: "blue",
//        posts: [
//            {
//                id: "1",
//                body: "This is a post"
//            },
//            {
//                id: "2",
//                body: "This is post 2"
//            },
//            {
//                id: "3",
//                body: "This is post 3"
//            }
//        ],
//        cart: [
//            {
//                id: "1",
//                name: "T-Shirt",
//                description: "This is a t-shirt"
//            },
//            {
//                id: "2",
//                name: "Shoe",
//                description: "This is a shoe"
//            }
//        ]
//    },
//    {
//        id: "2",
//        name: "Christopher",
//        email: "christophert@codingtemple.com",
//        favoriteColor: "green",
//        posts: [
//            {
//                id: "4",
//                body: "This is post 4"
//            },
//            {
//                id: "5",
//                body: "This is post 5"
//            },
//            {
//                id: "6",
//                body: "This is post 6"
//            }
//        ],
//        cart: [
//            {
//                id: "3",
//                name: "T-Shirt",
//                description: "This is a t-shirt"
//            },
//            {
//                id: "4",
//                name: "Hat",
//                description: "This is a hat"
//            }
//        ]
//    },
//    {
//        id: "3",
//        name: "Joel",
//        email: "joelc@codingtemple.com",
//        favoriteColor: "red",
//        posts: [
//            {
//                id: "7",
//                body: "This is post 7"
//            },
//            {
//                id: "8",
//                body: "This is post 8"
//            },
//            {
//                id: "9",
//                body: "This is post 9"
//            }
//        ],
//        cart: [
//            {
//                id: "5",
//                name: "Shoe",
//                description: "This is a t-shirt"
//            },
//            {
//                id: "6",
//                name: "Pants",
//                description: "These are pants"
//            }
//        ]
//    }
//]


//const currentUser = {
//    loggedIn: true
//}
//
//const protectedRoutes = [
//    '/',
//    '/users'
//]

//app.use((req, res, next) => {
//    console.log(`Request Type: ${req.method} made at route ${req.originalUrl} at time: ${new Date()}`)
//    next()
//})


//app.use((req, res, next) => {
//    if (currentUser.loggedIn || !protectedRoutes.includes(req.originalUrl)) {
//        
//        next() 
//    } else {
//      
//        res.redirect('/login')
//    }
//})


//app.use((req, res, next) => {
//    
//    const data = {
//        id: "1",
//        name: "Lucas",
//        email: "lucasl@codingtemple.com",
//        posts: [
//            {
//                id: "1",
//                body: "This is a post"
//            },
//            {
//                id: "2",
//                body: "This is post 2"
//            },
//            {
//                id: "3",
//                body: "This is post 3"
//            }
//        ]
//    }
//
//    req.currentUser = data
//    next()
//})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})


app.get('/user', (req, res) => {
    res.render('user')
})


app.get('/profile', (req, res) => {
    res.render('profile')
})


//app.get('/users/:id', (req, res) => {
//    const id = req.params.id
//
//    for (const user of userData) {
//        if (user.id === id) {
//            res.send(user)
//            return null
//        }
//    }
//
//    res.send({
//        error: `There was an error finding a user with id ${id}`
//    })
//})

//app.get('/users/:userId/post/:postIndex', (req, res) => {
//    const userId = req.params.userId
//    const postIndex = req.params.postIndex
//
//    for (const user of userData) {
//        if (user.id === userId) {
//            res.send(user.posts[postIndex])
//            return null
//        }
//    }
//
//    console.log(userId, postIndex)
//})


//app.get('/users/:userId/cart/:cartIndex', (req, res) => {
//})
//
//
//app.get('/users/:userId/in-cart/:productName', (req, res) => {
//    const productName = req.params.productName
//    
//    console.log(`${productName} is in cart`)
//    res.send(true)
//})

app.listen(port, () => {
    console.log(`Express application started at port: ${port}`)
})
