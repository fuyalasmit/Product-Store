import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import productRoutes from './routes/productRoute.js';
import cors from 'cors';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

const __dirname = path.resolve();

if( process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}

app.use(express.json()); //allows us to accept Json data in req.body
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World ');
});

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port', PORT);
});
