export interface ProductResponse {
    productId: number;
    name: string;
    price: number;
    rating: number;
    category: ProductCategory;
    sellerId: number;
    productImages: ProductImagesResponse[];
};

export interface ProductImagesResponse {
    productId: number;
    imagePath: string;
};
export type ProductCategory = "gadgets" | "books" | "clothes";

export interface FullProductItem extends ProductResponse {
    productDetails: ProductDetailsResponse;
};

export interface ProductDetailsResponse {
    productId: number;
    color: string | null;
    size: string | null;
    author: string | null;
    description?: string;
};