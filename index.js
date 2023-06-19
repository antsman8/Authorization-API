const mongoose = require('mongoose');
const express = require('express');
const authRouter = require('./authRoutes');
const authController = require('./authController');
const app = express();

app.use(express.json());
app.use('/auth', authRouter);
const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://antsam94:KAZpBdz700a5HDDB@cluster0.oaeg0br.mongodb.net/?retryWrites=true&w=majority'
        );
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};
start();
