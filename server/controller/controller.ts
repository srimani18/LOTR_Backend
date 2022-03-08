import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { BookDocs, ChapterDocs, CharacterDocs, MovieDocs, QuoteDocs } from '../models/model';

// getting all books
const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/book`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    }
    );
    let books: [BookDocs] = result.data;
    return res.status(200).json({
        message: books
    });
};

// getting a single book
const getBook = async (req: Request, res: Response, next: NextFunction) => {
    // get the book id from the req
    let id: string = req.params.id;
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    // get the book
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/book/${id}`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    });
    let book: BookDocs = result.data;
    return res.status(200).json({
        message: book
    });
};

//request all chapters of specific book
const getAllChaptersByBookID = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/book/${id}/chapter`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    });
    let chapters: ChapterDocs = result.data;
    return res.status(200).json({
        message: chapters
    });
};

// request all movies
const getMovies = async (req: Request, res: Response, next: NextFunction) => {

    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/movie`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    }
    );
    let movies: [MovieDocs] = result.data;
    console.log(movies);
    return res.status(200).json({
        message: movies
    });
};

//request one movie by id
const getMovieById = async (req: Request, res: Response, next: NextFunction) => {
    // get the movie id from the req
    let id: string = req.params.id;
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/movie/${id}`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    });
    let movie: MovieDocs = result.data;
    return res.status(200).json({
        message: movie
    });
};

//request all movie quotes for a specific movie

const getAllQuotesByMovieId = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/movie/${id}/quote`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    });
    let quotes: QuoteDocs = result.data;
    return res.status(200).json({
        message: quotes
    });
};

//request all characters
const getCharacters = async (req: Request, res: Response, next: NextFunction) => {
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/character`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    }
    );
    let characters: [CharacterDocs] = result.data;
    return res.status(200).json({
        message: characters
    });
};

//Request one specific character

const getCharacterById = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params._id;
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/character/${id}`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    });
    let character: CharacterDocs = result.data;
    return res.status(200).json({
        message: character
    });
};
//Request all movie quotes of one specific character

const getAllMovieQuotesByCharacterId = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/character/${id}/quote`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    });
    let quotes: QuoteDocs = result.data;
    return res.status(200).json({
        message: quotes
    });
};
//request all quotes
const getQuotes = async (req: Request, res: Response, next: NextFunction) => {
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/quote`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    }
    );
    let quotes: [QuoteDocs] = result.data;
    return res.status(200).json({
        message: quotes
    });
};

// request quote by id


const getQuoteById = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let myToken = `Y0akexnYdhwLfyUjPPM5`;
    let result: AxiosResponse = await axios.get(`https://the-one-api.dev/v2/quote/${id}`,{
        headers: { 
            "Authorization": `Bearer ${myToken}`, 
            "Content-Type": "application/json",
        }
    });
    let quote: QuoteDocs = result.data;
    return res.status(200).json({
        message: quote
    });
};
export default { getBooks, getBook, getAllChaptersByBookID, getMovies , getMovieById, 
    getAllQuotesByMovieId, getCharacters, getCharacterById, getAllMovieQuotesByCharacterId,
    getQuotes, getQuoteById};