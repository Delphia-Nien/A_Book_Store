import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: "5000",
  MONGO_URI: "***",
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  JWT_SECRET: "sl_myJwtSecret"
};
