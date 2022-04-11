import express from 'express'

import priceRoutes from './src/components/prices/index.js'

const app = express()

app.use('/prices', priceRoutes)

export default app
