import { IProduct } from "@/types";
import { createContext, ReactNode, useState } from "react";

interface CartItem extends IProduct {}

interface CartContextType {
  carts: CartItem[];
  setCarts: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

// Create the context with a default value of undefined
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface ContextCartProps {
  children: ReactNode;
}

const CartProvier: React.FC<ContextCartProps> = ({ children }) => {
  const [carts, setCarts] = useState<CartItem[]>([]);
  const cartItem: CartContextType = { carts, setCarts };

  return (
    <CartContext.Provider value={cartItem}>{children}</CartContext.Provider>
  );
};

export default CartProvier;
