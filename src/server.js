import Express from 'express'
import './config/dotenv.config'

const app = Express()

app.set('port', process.env.PORT || 3000)

app.get('/', (_, res) => {
  res.send('Hello World!')
})

export default app