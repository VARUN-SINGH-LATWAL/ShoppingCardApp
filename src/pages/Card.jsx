import React, { useContext } from 'react'
import { ShoppingCardContext } from '../Hook/ProductContext'
import CardTile from '../components/CardTile'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const  navigate = useNavigate()
  const {cardItems} = useContext(ShoppingCardContext)
  return (
    <div className='max-w-5x1 mx-auto max-md:max-w-xl py-4 ' >
      <h1 className='text-2xl font-bold text-gray-800 text-center'>My Card Page</h1>
      <div className='grid md:grid-cols-3 gap-8 mt-12 ' >
          <div className='md:col-span-2 space-y-2'>
              {
                cardItems?.length ? 
                cardItems?.map(singleCardItem=> <CardTile key={singleCardItem.id} singleCardItem={singleCardItem}/> )
                : <h1>No items available in card!</h1>
              }
          </div>
          <div className='bg-gray-100 rounded-sm   p-4 h-max'>
            <h3 className='text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2' >Order Summary</h3>
            <ul className='text-gray-700 mt-4 space-y-2' >
                <p className='flex flex-wrap gap-4 text-sm font-bold '>
                  Total <span>
                    ${cardItems.reduce((acc,curr)=> acc + curr.TotailPrice , 0)?.toFixed(2)}
                  </span>
                </p>
            </ul>
            <div className='mt-5 flex  gap-2'>
                <button className='text-sm px-4 py-3 bg-black text-white font-extrabold'>
                  Checkout 
                </button>

                <button onClick={()=> navigate('/product')} className='text-sm px-4 py-3 bg-black text-white font-extrabold'>
                  Continue Shopping 
                </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card