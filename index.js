var express = require('express')
var app = express()
const PORT = 3000
const router = express.Router()

//localhost:3000/
app.get('/', (req, res) => res.send("api ready") )

//all routes prefixed with api
app.use('/api', router)

//localhost:3000/api/
router.get('/', (req, res) => {res.json({message : "hello user, welcome to my server"});})

//on postman  visit localhost:3000/api/ and you will see the json object returned in response.
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
