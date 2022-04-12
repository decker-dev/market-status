import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './market_status_openapi.json' assert {type: 'json'}

import priceRoutes from './src/components/prices/index.js'

const app = express()

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }))
app.use('/prices', priceRoutes)

export default app
