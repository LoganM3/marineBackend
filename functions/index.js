import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'
import { getAllAudio } from './src/routes/audio.js'
// import { MongoClient } from 'mongodb'
// import { uri } from './secrets'
// const client = MongoClient(uri)
// const audioDB = client.db('Audio')


const app = express()
app.use(cors())
app.use(express.json())


app.get('/JL-Audio', getAllAudio)

// app.get('/',(req,res) =>{
//     res.status(200).send('hello wowrld')
// })

// const port = 4000
// app.listen(port, () => {
//     console.log('ready on http://localhost:'+port)
// })

export const api = functions.https.onRequest(app)