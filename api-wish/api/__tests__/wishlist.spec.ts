import { WishlistService } from './../components/service/wishlist.service';
import { UserService } from '../components/service/user.service';
import {Context, createMockContext, MockContext} from "../components/service/prisma.service";

let mockCtx: MockContext;
let ctx: Context;
let wishlistService: WishlistService;

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
    wishlistService = new WishlistService(ctx);
})

test('Wishlist should be created for user', async () => {
    const wishlist = {
        id: 1,
        products: [],
        userId: 1
    }

    mockCtx.prisma.wishlist.create.mockResolvedValue(wishlist)
    await expect(wishlistService.createWishList(1)).resolves.toEqual(wishlist)
})

test('Wishlist should be listed for id', async () => {
    const wishList1 = {
        id: 1,
        products: [],
        userId: 1
    }
    const wishList2 = {
        id: 2,
        products: [],
        userId: 1
    }
    const wishList3 = {
        id: 3,
        products: [],
        userId: 2
    }

    mockCtx.prisma.wishlist.findMany.mockResolvedValue([wishList1, wishList2])
    await expect(wishlistService.getUserWishList(1)).resolves.toEqual([wishList1, wishList2])
})