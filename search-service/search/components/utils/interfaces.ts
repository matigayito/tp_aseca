export interface User {
    sex: boolean;
    ageGroup: number;
}

export interface Product {
    name: String;
    price: number;
    discount: number;
    targetAgeGroup: number;
    category: String[];
}