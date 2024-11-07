const express = require('express');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
// app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
