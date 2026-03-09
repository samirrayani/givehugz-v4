"use client";

export interface CartItem {
  variantId: number;
  productId: number;
  title: string;
  variantTitle: string;
  price: string;
  quantity: number;
  image: string;
  handle: string;
}

const CART_KEY = "givehugz-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cart-updated"));
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const existing = cart.find((i) => i.variantId === item.variantId);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  saveCart(cart);
}

export function removeFromCart(variantId: number) {
  const cart = getCart().filter((i) => i.variantId !== variantId);
  saveCart(cart);
}

export function updateQuantity(variantId: number, quantity: number) {
  const cart = getCart();
  const item = cart.find((i) => i.variantId === variantId);
  if (item) {
    item.quantity = Math.max(0, quantity);
    saveCart(item.quantity === 0 ? cart.filter((i) => i.variantId !== variantId) : cart);
  }
}

export function getCartCount(): number {
  return getCart().reduce((sum, i) => sum + i.quantity, 0);
}

export function getCartTotal(): number {
  return getCart().reduce((sum, i) => sum + parseFloat(i.price) * i.quantity, 0);
}

export function getCheckoutUrl(): string {
  const cart = getCart();
  if (cart.length === 0) return "#";
  const items = cart.map((i) => `${i.variantId}:${i.quantity}`).join(",");
  return `https://givehugz.co/cart/${items}`;
}
