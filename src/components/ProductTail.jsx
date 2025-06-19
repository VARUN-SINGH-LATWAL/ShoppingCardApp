import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCardContext } from "../Hook/ProductContext";

const ProductTail = ({ singleItem }) => {
    const navigate = useNavigate()
    const {handleAddToCard , cardItems } = useContext(ShoppingCardContext)

    function handleNavigateToProductDetailsPage (getCurrentProductId) {
        // console.log(getCurrentProductId,navigate)
        navigate(`/product-details/${getCurrentProductId}`)
    }
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={singleItem?.thumbnail}
          alt={singleItem?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />{" "}
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm test-xs md:text-base ">
          <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
            {" "}
            {singleItem?.title}
          </p>
        </div>
        <div className="text-right ">
          <p className="test-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${singleItem?.price}
          </p>
        </div>
      </div>
      <button onClick={()=>handleNavigateToProductDetailsPage(singleItem?.id)} className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg" >View Details</button>
      <button onClick={()=>handleAddToCard(singleItem)} disabled={cardItems.findIndex(item => item.id === singleItem.id) > -1 } className="disabled:opacity-70 px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg" >Add TO Card</button>
    </div>
  );
};

export default ProductTail;
