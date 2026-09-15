import { ProductInCartResponse } from "../products/product";
export type CartResponse = {
    cartId: number;
    userId?: number;
    createdAt: Date | null;
    expiresAt: Date | null;
    items: CartItemResponse[];
} | {
    items: null;
};
export interface CartItemResponse {
    cartItemId: number;
    quantity: number;
    product: ProductInCartResponse;
}
export interface ApiGetCart {
    cartId: number;
    expiresAt: Date | null;
    items: GetCartItemDto[];
}
export interface GetCartItemDto {
    quantity: number;
    product: GetProductInCartDto;
}
export interface GetProductInCartDto {
    productId: number;
    name: string;
    price: number;
    productImages: {
        imagePath: string;
    }[];
}
