import { ProductService } from './../components/service/product.service';
import { WishlistService } from './../components/service/wishlist.service';
import { UserService } from '../components/service/user.service';
import {Context, createMockContext, MockContext} from "../components/service/prisma.service";

let mockCtx: MockContext;
let ctx: Context;
let productService: ProductService;

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
    productService = new ProductService(ctx);
})

test('Update discount on product should return product with discount aplied', async () => {
    const product = {
        id: 1,
        name: "Remera",
        price: 80,
        discount: 0,
        targetAgeGroup: 1
    }
    const discount = 50
    const productToUpdate = [
        {
            productId: 1,
            discount
        }
    ]
    mockCtx.prisma.product.update.mockResolvedValue({...product, discount})
    mockCtx.prisma.wishlist.findMany.mockResolvedValue([])
    await expect(productService.updateProductDiscounts(productToUpdate)).resolves.toEqual(
        [{ 
            product: {...product, discount},
            usersToNotify: []
        }]
    )
})

/**test('Update to not existing discount should fail', async () => {
    const product = {
        id: 1,
        name: "Remera",
        price: 80,
        discount: 0,
        targetAgeGroup: 1
    }
    const discount = 50
    const productToUpdate = [
        {
            productId: 1,
            discount
        }
    ]
    mockCtx.prisma.product.update.mockResolvedValue({...product, discount})
    mockCtx.prisma.wishlist.findMany.mock
    await expect((await productService.updateProductDiscounts(productToUpdate))).resolves.toEqual(
        [{ 
            product: {...product, discount},
            usersToNotify: []
        }]
    )
})*/
