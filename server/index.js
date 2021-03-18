import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import courseRoutes from './routes/courses.js';
import adminRoutes from './routes/admins.js';
import degreeRoutes from './routes/degrees.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/courses', courseRoutes);
app.use('/admins', adminRoutes);
app.use('/degrees', degreeRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Degree Planner API')
});

const CONNECTION_URL = 'mongodb+srv://csc530:csc530SPRING21@cluster0.ubgwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then (() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

