import express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/toDoRoute');

require('dotenv').config();

const app = express();
const PORT: string | number = process.env.port || 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected To mongoDb.....`))
  .catch((err: any) => console.log(err));

app.listen(PORT, () => console.log(`listening on: ${PORT}`));
