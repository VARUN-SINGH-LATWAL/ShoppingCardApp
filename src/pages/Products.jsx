import React, { useContext } from 'react'
import { ShoppingCardContext } from '../Hook/ProductContext'
import ProductTail from '../components/ProductTail'

const Products = () => {
  const {Product , loading } = useContext(ShoppingCardContext)
  console.log(Product)

  if(loading) return <h1>Loading Data !</h1>
  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20' >
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl' >
        <div className='max-w-md mx-auto text-center' >
          <h2 className='text-3xl font-extrabold text-gray-500' >Our Featured Products</h2>
        </div>
        <div className='grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4'>
             {
        Product && Product.length > 0 ? 
        Product.map(singleItem => <ProductTail singleItem={singleItem} /> )
        : "Data not found"
      }
        </div>
      </div>
     
    </section>
  )
}

export default Products