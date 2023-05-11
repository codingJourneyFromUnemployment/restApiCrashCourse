const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const configPath = path.join(__dirname, './config/config.env');
const Router = require('./routes/index');
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;
// app.set('strict routing', false);
dotenv.config({ path: configPath });
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/goals', Router);

app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


