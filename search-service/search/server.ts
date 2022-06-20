const express = require('express');
import { SearchController } from "./components/controller/search.controller";
import { Request, Response } from 'express';

const searchController = new SearchController();

const app = express();
const apiRouter = express.Router();

apiRouter.get('/search', (req:Request, res:Response) => searchController.generalSearch(req, res))

app.use(express.json())
app.use(apiRouter)
app.listen(5000)
console.log("Listening on port 5000")
console.log(searchController)