import { User, Product } from "../utils/interfaces";

export class SearchService {

    public search(user: User, preferCategories: String[], products: Product[], s: String) {
        const result : Product[] = [];
        products.map(p => {
            if (p.targetAgeGroup === user.ageGroup) {
                if (p.category.map(c => {
                    return preferCategories.includes(c);
                }).includes(true)) {
                    if (p.name.match(".*" + s + ".*")) {
                        result.push(p);
                    }
                }
            }
        })
        return result;
    }

}