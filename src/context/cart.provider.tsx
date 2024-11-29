import { createContext, ReactNode, useState } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity: number;
}

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
  // Define the state with the correct type for carts
  const [carts, setCarts] = useState<CartItem[]>([]);

  // Define the context value
  const cartItem: CartContextType = { carts, setCarts };

  return (
    <CartContext.Provider value={cartItem}>{children}</CartContext.Provider>
  );
};

export default CartProvier;
