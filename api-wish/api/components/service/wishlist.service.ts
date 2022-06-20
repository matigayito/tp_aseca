import { ErrorCode } from './../utils/error-code';
import { ErrorException } from './../utils/error-exception';
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
            throw new ErrorException(ErrorCode.DatabaseError)
        }
    }

    public getUserWishList(userId: number) {
        try {
            return this.wishlistRepository.getUserWishList(userId)
        } catch (e) {
            throw new ErrorException(ErrorCode.NotFound)
        }
    }

    public addProductToWishList(productId: number, whishlistId: number) {
        try {
            return this.wishlistRepository.addProductToWishlist(productId, whishlistId)
        } catch (e) {
            throw new ErrorException(ErrorCode.NotFound)
        }
    }
}