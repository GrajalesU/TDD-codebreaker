const express = require('express');
const cors = require('cors');
const codeBreaker = require('../codeBreaker/codeBreaker.js');

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))



app.post('/codebreaker', (req, res) => {
  const { guess } = req.body
  if (!codeBreaker.validate(guess)) {
    res.status(400).json({
      error: 'Answer with an incorrect format, must be a four digit number'
    })
    return
  }
  const response = codeBreaker.check(guess)
  res.status(200).json({
    res: response
  })
})

app.get('/codebreaker', (req, res) => {
  codeBreaker.updateSecret()
  const secret = codeBreaker.getSecret()
  res.status(200).json({
    res: 'Secret updated',
    secret
  })
})

module.exports = app
