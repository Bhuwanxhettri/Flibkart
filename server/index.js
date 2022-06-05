import express from 'express';

const app=express();

const PORT=8000;

// calling express server
app.listen(PORT,()=> console.log(`Server is running successfully on PORT ${PORT} hello`));