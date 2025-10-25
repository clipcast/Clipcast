import express from 'express';
import bodyParser from 'body-parser';
import clipsRouter from './routes/clips';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/clips', clipsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});