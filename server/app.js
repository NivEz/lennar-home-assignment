import express, { json } from 'express';

const app = express();
const port = 3000;

// Middleware
app.use(json());

// Routes
// app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
