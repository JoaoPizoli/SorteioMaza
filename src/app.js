import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { router } from './routes/router.js'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.static('front-end'))

app.use('/api', router)

const PORT = process.env.PORT || 4001
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () => {
    console.log(`Api rodando em http://${HOST}:${PORT}`)
})