import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import CountryRoutes from './routes/country.routes.js'
import bodyParser from 'body-parser';
import { sequelize } from './utils/db-manager.js';

// let whitelist = ['http://localhost:9527','http://localhost:80'];
// let corsOptions = {
//     origin: (origin, callback)=>{
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     },credentials: true
// }

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.Server(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());
app.use("/", CountryRoutes)

sequelize.sync();


server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
