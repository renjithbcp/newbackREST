import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactsRoutes.js';
dotenv.config()
const app = express();

const port =process.env.PORT||5000;

app.use("/api/contacts",contactRoutes);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
