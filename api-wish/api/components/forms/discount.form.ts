import { IsInt } from "class-validator"

export class Discount {

    @IsInt()
    productId: number

    @IsInt()
    discount: number

    constructor(productId: number, discount: number){
        this.productId = productId
        this.discount = discount
    }
}