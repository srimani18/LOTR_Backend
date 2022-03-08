import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/routes';

const router: Express = express();

const cors = require("cors");
//router.use(require("cors")());

router.use(
  cors({
    origin:'*',
    credentials: true
  })
);

router.use(morgan('dev'));

router.use(express.urlencoded({ extended: false }));

router.use(express.json());

router.use(express.static('public'));

router.use((req, res, next) => {
   
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    //res.header('Access-Control-Allow-Headers': 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

router.use('/', routes);

router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT || 6420;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
