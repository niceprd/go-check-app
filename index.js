const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))
// css/ of server
app.use(express.static(path.join(__dirname, 'server/public')))
// pick fonts from client sourcecodes
app.use(express.static(path.join(__dirname, 'client/src/assets/fonts')))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port)

console.log(`Go-check Container listening on ${port}`)
