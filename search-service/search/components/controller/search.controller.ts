import { Request, Response } from 'express';
import { OK } from "../utils/status-codes";
import { SearchService } from "../service/search.service";

export class SearchController {

    searchService: SearchService;

    constructor() {
        const searchService = new SearchService()
        this.searchService = searchService;
    }

    public async generalSearch(req: Request, res: Response) {
        const {user, preferCategories, products , s} = req.body;
        return res.status(OK).json(await this.searchService.search(user, preferCategories, products, s))
    }
}