import { ProductInCartResponse } from "../products/product";

interface BaseCart {
    cartId: number;
    userId: number | null;
    createdAt: Date | null;
    expiresAt: Date | null;
    items: CartItemResponse[];
}

export type GetCartResponse = BaseCart | {
    items: null;
}

export interface CartItemResponse {
    cartItemId: number;
    quantity: number;
    product: ProductInCartResponse;
}

type AddToCartOmitItemsResponse = Omit<BaseCart, 'items'>;

export interface AddToCartResponse {
    cart: AddToCartOmitItemsResponse;
    cartItem: CartItemResponse;
}

export interface AddToCartItemResponse {
    cartId: number;
    cartItemId: number;
    productId: number;
    quantity: number;
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