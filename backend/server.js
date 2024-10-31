
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const authController = require('./controllers/authController')
const authRoutes = require('./routes/authRoutes')
const Adminrouter = require('./routes/adminRoute')
dotenv.config(); // Load environment variables from .env file

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.use('/api', authRoutes); 
// app.use('/admin/users', Adminrouter); 
app.use('/', Adminrouter);
const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, POST,PUT,DELETE,PATCH, HEAD",
  Credentials : true,
}
app.use(cors(corsOption))
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
