import React, { Fragment, useContext } from 'react'
import { ShoppingCardContext } from '../Hook/ProductContext'

const CardTile = ({singleCardItem}) => {
  // console.log(singleCardItem)
  const {handleRemoveToCard ,handleAddToCard} = useContext(ShoppingCardContext)
  return (
    <Fragment>
      <div className='grid grid-cols-3 items-start gap-5'>
      <div className='col-span-2 flex items-start gap-4'>
        <div className='w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm '>
          <img src={singleCardItem?.thumbnail} className='w-full h-full object-contain'  />
        </div>
        <div>
          <h3 className='text-base font-bold text-gray-900' >{singleCardItem?.title}</h3>
          <button className='text-sm px-4 py-3 bg-black text-white font-extrabold' onClick={()=>handleRemoveToCard(singleCardItem, true)}>REMOVE</button>
        </div>
      </div>
      <div className='ml-auto '>
        <h3 className='text-lg font-bold text-gray-800' >${singleCardItem?.TotailPrice?.toFixed(2)}</h3>
        <p className='mt-2 mb-2 font-bold text-[16px]'>Quantity : {singleCardItem?.quantity}</p>
        <div className='mt-3'>
          <button onClick={()=>handleRemoveToCard(singleCardItem, false)} disabled={singleCardItem?.quantity === 1} className='disabled:opacity-70 bg-slate-300  px-3 py-1 border border-[#000]'>-</button>
          <button onClick={()=>handleAddToCard(singleCardItem)} className='px-3 py-1 border border-[#000]'>+</button>
        </div>
      </div>
    </div>
    <hr className='border-gray-300' />
    </Fragment>
  )
}

export default CardTile