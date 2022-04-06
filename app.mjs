import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`🚀 Find me on http://localhost:${port}`)
})
