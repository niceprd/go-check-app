const express = require('express')
const shrinkRay = require('shrink-ray-current')

const app = express()

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false
  }
  return shrinkRay.filter(req, res)
}

app.use(
  shrinkRay({
    filter: shouldCompress,
    brotli: {
      quality: 11,
    },
  })
)
app.use(express.static(`${__dirname}/build`))
app.listen(8888)
