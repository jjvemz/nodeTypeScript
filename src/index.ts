import express from 'express';
import diaresRouter from './routes/diaries'
const app = express()
app.use(express.json())


const PORT =3000

app.get('/ping', (_req, res) =>{
    console.log('Someone pinged here!! hello there')
    res.send('pong')
})

app.use('/api/v1/diaries',diaresRouter)

app.listen( PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})