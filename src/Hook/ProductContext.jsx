import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCardContext = createContext(null);

function GlobelShopping({ children }) {
  const [Product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ProductDetails, setProductDetails] = useState(null);
  const [cardItems, setCardItems] = useState([]);
  const navigate = useNavigate()

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
    // console.log(getProductDetails)
    let copExistingCardItems = [...cardItems]
    const findIndexOfCurrentItem = copExistingCardItems.findIndex((cardItems)=> cardItems.id === getProductDetails.id)
    console.log(findIndexOfCurrentItem)
    if (findIndexOfCurrentItem === -1) {
      copExistingCardItems.push({
        ...getProductDetails,
        quantity : 1,
        TotailPrice : getProductDetails?.price
        
      })
    }else{
      // console.log(findIndexOfCurrentItem)
      copExistingCardItems[findIndexOfCurrentItem] = {
        ...copExistingCardItems[findIndexOfCurrentItem],
        quantity : copExistingCardItems[findIndexOfCurrentItem].quantity + 1,
        TotailPrice : (copExistingCardItems[findIndexOfCurrentItem].quantity  + 1)  * copExistingCardItems[findIndexOfCurrentItem].price
      }
    }

    // console.log(copExistingCardItems)
    setCardItems(copExistingCardItems)
    localStorage.setItem('cartItem', JSON.stringify(copExistingCardItems))
    navigate('/card')
  }


  function handleRemoveToCard(getProductDetails , isFullyRemoveFromCard) {
    let cpyExistingCardItems = [...cardItems];
    const findIndexOfCurrentCardItem = cpyExistingCardItems.findIndex(item => item.id === getProductDetails.id)
    if (isFullyRemoveFromCard) {
      cpyExistingCardItems.splice(findIndexOfCurrentCardItem , 1)
    }else{
      cpyExistingCardItems[findIndexOfCurrentCardItem]={
        ...cpyExistingCardItems[findIndexOfCurrentCardItem],
        quantity : cpyExistingCardItems[findIndexOfCurrentCardItem].quantity - 1,
        TotailPrice : (cpyExistingCardItems[findIndexOfCurrentCardItem].quantity - 1) * cpyExistingCardItems[findIndexOfCurrentCardItem].price
      }
    }

    localStorage.setItem('cartItem', JSON.stringify(cpyExistingCardItems))
    setCardItems(cpyExistingCardItems)
    console.log(getProductDetails)
  }








  

  useEffect(() => {
    fetchProductData();
    setCardItems(JSON.parse(localStorage.getItem('cartItem') || "[]"))
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
        handleRemoveToCard,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
}

export default GlobelShopping;
