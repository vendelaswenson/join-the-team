const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3010

app.use(cors())

app.use(bodyParser.json())

app.post('/update-team', (req, res) => {
  const newData = req.body
  res.json({ message: 'Data updated successfully', data: newData })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
