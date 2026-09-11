import { ProductInCartResponse } from "../products/product";

export interface CartResponse {
    token: string;
    cartId: number;
    userId?: number | null;
    createdAt: Date;
    expiresAt: Date | null;
    items: CartItemResponse[];
}

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
    productImages: { imagePath: string }[];
}