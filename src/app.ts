const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { expressjwt: jwt } = require('express-jwt');
const jwks = require('jwks-rsa');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

import { experimentoRoute } from './routes/experimento.routes';

let origen;
if (process.env.ENVIROMENT == 'PROD')
    origen = ['https://spin-server-mnr.onrender.com', 'https://spin-mnr.vercel.app', 'https://localhost:4200']
else
    origen = ['https://spin-server-mnr.onrender.com', 'https://spin-mnr.vercel.app', 'https://localhost:4200', 'https://localhost:3000']

const corsOptions = {
    origin: origen,
    optionsSuccessStatus: 200
}

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.API_DOMAIN}/.well-known/jwks.json`
    }),
    audience: `https://${process.env.API_AUDIENCE}/`,
    issuer: `https://${process.env.API_DOMAIN}/`,
    algorithms: ['RS256']
});

app.set('view engine', 'html');

app.use(cors(corsOptions));
app.use(helmet.hidePoweredBy());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/experimento', jwtCheck, experimentoRoute);

app.use((err: any, _req: any, _res: any, next: any) => {
    const err2: Error = new Error('Error: ' + err);
    console.log("Err -> " + err2);
    //err2.status = 404;
    next(err2);
});

app.set('port', port);

if (process.env.ENVIROMENT == 'PROD') {
    app.listen(port, () => { });
} else {
    const https = require('https');
    const fs = require('fs');

    const options = {
        key: fs.readFileSync('./ssl/aplicacionPacisa.key'),
        cert: fs.readFileSync('./ssl/aplicacionPacisa.crt')
    };

    https.createServer(options, app).listen(port);
}


