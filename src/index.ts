import { dbConnection } from "./database/db";
const dotenv = require('dotenv');

dotenv.config();


dbConnection();