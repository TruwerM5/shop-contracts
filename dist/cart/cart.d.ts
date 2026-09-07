export interface Cart {
    cartId: number;
    token: string;
    userId: number | null;
    createdAt: Date;
    updatedAt: Date;
    expiresAt: Date | null;
}
export interface CartItem {
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
    productImages: {
        imagePath: string;
    }[];
}
export interface CartStore {
    items: CartItem[];
    fetchCart: () => Promise<void>;
    getCartSize: () => number;
    setItems: (items: CartItem[]) => void;
}
