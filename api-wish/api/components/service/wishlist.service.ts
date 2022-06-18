import { DatabaseError, NotFoundError } from './../utils/errors';
import { WishlistRepository } from './../repository/wishlist.repository';
import { Context } from './prisma.service';

export class WishlistService {

    private wishlistRepository: WishlistRepository;

    constructor(ctx: Context) {
        this.wishlistRepository = new WishlistRepository(ctx);
    }

    public createWishList(userId:number) {
        try {
            return this.wishlistRepository.createWishlist(userId)
        } catch (e) {
            throw new DatabaseError(e.message)
        }
    }

    public getUserWishList(userId: number) {
        try {
            return this.wishlistRepository.getUserWishList(userId)
        } catch (e) {
            throw new NotFoundError(e.message)
        }
    }
}