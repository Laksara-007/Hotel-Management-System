require("dotenv").config();
import express from 'express'

const app = express();

app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 3000;

//routes
//con db

app.listen(port, () => {
    console.log(`Bashaway server successfully started on port ${port}`)
  });