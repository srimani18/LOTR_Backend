import express from 'express';
import controller from '../controller/controller';

const router = express.Router();

router.get('/book', controller.getBooks);
router.get('/book/:id', controller.getBook);
router.get('/book/:id/chapter', controller.getAllChaptersByBookID);
router.get('/movie', controller.getMovies);
router.get('/movie/:id', controller.getMovieById);

router.get('/movie/:id/quote', controller.getAllQuotesByMovieId);
router.get('/character', controller.getCharacters);
router.get('/character/:_id', controller.getCharacterById);

router.get('/character/:id/quote', controller.getAllMovieQuotesByCharacterId);
router.get('/quote', controller.getQuotes);
router.get('/quote/:id', controller.getQuoteById);

export = router;