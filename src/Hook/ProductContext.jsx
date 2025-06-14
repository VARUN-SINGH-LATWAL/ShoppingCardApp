import { createContext } from "react";
import { useState, useEffect } from "react";

export const ShoppingCardContext = createContext(null);

function GlobelShopping({ children }) {
  const [Product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ProductDetails, setProductDetails] = useState(null);
  const [cardItems, setCardItems] = useState([]);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      // console.log(result)
      if (result && result?.products) {
        setProducts(result.products);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  function handleAddToCard(getProductDetails) {
    console.log(getProductDetails)
    // let copExistingCardItems = [...cardItems]

  }

  // console.log(Products)

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ShoppingCardContext.Provider
      value={{
        Product,
        loading,
        ProductDetails,
        setProductDetails,
        setLoading,
        cardItems,
        setCardItems,
        handleAddToCard,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
}

export default GlobelShopping;
