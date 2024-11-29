import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface CartContextType {
  carts: any[]; // Replace `any` with your actual cart item type
  setCarts: Dispatch<SetStateAction<any[]>>;
}

export const CartContext = createContext<CartContextType | null>(null);

const ContextCart = ({ children }: { children: ReactNode }) => {
  const [carts, setCarts] = useState<any[]>([]); // Replace `any` with your cart item type

  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextCart;
