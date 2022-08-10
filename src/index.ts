import express from 'express';
import * as MySQLConnector from './utils/mysql.connector';

const app = express();
const PORT = 3977;

MySQLConnector.init();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes


app.listen(PORT, () => {
    console.log(`Auto Compartido REST API Listening at http://localhost:${PORT}`);
})