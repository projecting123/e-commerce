/**
 * Defines the shape of each product object. All properties are required.
 */
export interface SingleProduct{
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    isAvailable: boolean;
}

/**
 * Defines the type of products, not of single product object. All properties are required.
 */
export interface Products{
    category: string;
    productList: SingleProduct[]
}