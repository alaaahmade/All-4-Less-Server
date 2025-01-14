import dotenv from 'dotenv';
dotenv.config();

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const port = process.env.PORT || 8080;
const secretKey = process.env.SECRET_KEY;
const nodeEnv = process.env.NODE_ENV;
const { FNAME, LNAME, DAY, MONTH, YEAR, PHONE, GENDER, ROLE, EMAIL, PASSWORD } =
  process.env;

if (!EMAIL || !FNAME || !PHONE || !PASSWORD) {
  throw new Error('invalid Admin Variables');
}

if (!secretKey) {
  throw new Error('invalid Secret Key');
}

if (!nodeEnv) {
  throw new Error('invalid Node Environment');
}

let dbUrl: string | undefined;
let ssl: boolean | object = false;
switch (nodeEnv) {
  case 'development':
    dbUrl = process.env.DEV_DB_URL;
    break;
  case 'production':
    console.log('wow are you her ?');
    dbUrl = process.env.DATABASE_URL;
    ssl = {
      require: true,
      rejectUnauthorized: false,
    };
    break;
  case 'test':
    dbUrl = process.env.TEST_URL;
    break;
  default:
    throw new Error('DataBase Connection Url Error');
}

export default {
  FNAME,
  LNAME,
  DAY,
  MONTH,
  YEAR,
  PHONE,
  GENDER,
  ROLE,
  EMAIL,
  PASSWORD,
  port,
  dbUrl,
  nodeEnv,
  secretKey,
  googleClientId,
  googleClientSecret,
  ssl,
};
