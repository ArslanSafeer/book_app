import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import "colors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const URI = process.env.MongoDBURI;
console.log(URI);

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MongoDBURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB: ${conn.connection.host}`.bgCyan.white);
    } catch (error) {
        console.error(`Error in MongoDB: ${error.message}`.bgRed.white);
        process.exit(1); // Stop the app on DB connection failure
    }
};

// Call the connectDB function **after defining it**
connectDB();

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Fallback for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`.yellow);
});
