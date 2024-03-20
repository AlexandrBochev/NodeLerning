import express from 'express'

const app = express()
const PORT = 5000

// CRUD operations

// Create
app.post('/api/create', (req, res) => {
  console.log('Create operation')
})

// Read
app.get('/api/read', (req, res) => {
  res.send('Read operation')
  console.log('Read operation')
})

// Update
app.put('/api/update', (req, res) => {
  console.log('Update operation')
})

// Delete
app.delete('/api/delete', (req, res) => {
  console.log('Delete operation')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})