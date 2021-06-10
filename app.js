const express = require('express')
const app = express()
const passport = require('passport')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const port = 8080

const autherizationRoute = require('./auth_routes')

app.use(bodyParser.json())
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:["njgbjhgjh"],
}))
app.use(passport.initialize())
app.use(passport.session())


app.use('/autherization',autherizationRoute)

app.get('/', isLoggedIn,(req, res) => res.send('Example Home page!'))
app.listen(process.env.PORT||port,()=>{
    console.log(`api listening at http://localhost:${port}`)
})