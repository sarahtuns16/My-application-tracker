import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'; 
import authRoutes from './routes/authRoutes.js'; 
import applicationRoutes from './routes/applicationRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('DB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));