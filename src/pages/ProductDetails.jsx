import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCardContext } from "../Hook/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    ProductDetails,
    setProductDetails,
    setLoading,
    loading,
    handleAddToCard,
  } = useContext(ShoppingCardContext);

  async function fetchProductDetails() {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await response.json();
      if (result) setProductDetails(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  // console.log(ProductDetails)
  useEffect(() => {
    fetchProductDetails();
  }, []);

  // function handleGoToCard() {
  //   handleGoToCard()
  //   navigate('/Card')
  // }

  if (loading) return <h1>Product Details Loading...</h1>;
  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6 ">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={ProductDetails?.thumbnail}
                alt={ProductDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {ProductDetails?.images?.length
                ? ProductDetails?.images.map((imageItem) => (
                    <div key={imageItem} className="rounded-xl p-4 shadow-md">
                      <img
                        src={imageItem}
                        className="w-24 cursor-pointer"
                        alt="Product Secondary image"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#585858]">
              {ProductDetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              {" "}
              <p className="text-xl font-bold ">{ProductDetails?.price}</p>{" "}
            </div>
            <div>
              <button
                // onClick={() => {
                //   handleGoToCard(ProductDetails);
                // }}
                onClick={() => {
                  handleAddToCard(ProductDetails); // ✅ correct function name
                }}
                className="mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded"
              >
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
