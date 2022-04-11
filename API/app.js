import express from 'express'

const app = express();

import priceRoutes from './src/components/prices/index.js';

app.use('/prices', priceRoutes);

export default app;
