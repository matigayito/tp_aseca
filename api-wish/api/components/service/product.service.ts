import { WishlistRepository } from './../repository/wishlist.repository';
import { ProductRepository } from './../repository/product.repository';
import { Context } from './prisma.service';

interface Discount {
    productId: number,
    discount: number
}

export class ProductService {
    private productRepository: ProductRepository;
    private wishlistRepository: WishlistRepository;

    constructor(ctx: Context) {
        this.productRepository = new ProductRepository(ctx);
        this.wishlistRepository = new WishlistRepository(ctx);
    }

    public updateProductDiscounts(discounts: Discount[]){
        return Promise.all(discounts.map(async discount => {
            try {
                const updatedProduct = await this.productRepository.updateProductDiscount(discount.productId, discount.discount)
                const wishlistsWhereProductIs = await this.wishlistRepository.findByProductId(discount.productId)
                return { product: updatedProduct, usersToNotify: wishlistsWhereProductIs.map(wishlist => wishlist.userId) }
            } catch (e) {
                console.warn(e)
            }
        }))
    }

    public getAllProducts() {
        return this.productRepository.getAllProducts()
    }
}