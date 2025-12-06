import React from 'react'
import Image from 'next/image'
async function getData() {
  const url = 'https://fakestoreapi.com/products'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error(error.message)
  }
}

export default async function Data() {
  const data = await getData()
  const product = data.map(product => (
    <div key={product.id} className='grid grid-cols-3 gap-10 p-5 bg-amber-600'>
      <div className='flex items-center justify-center flex-col h-fit mx-auto w-65 rounded-xl hover:shadow-lg shadow-black/50 hover:scale-103 transition-all duration-300 ease-in-out bg-neutral-700 flex-wrap shadow-lg'>
        <div className='w-65 flex-wrap'>
          <img
            className='rounded-t-xl peer py-6 px-3 h-60 w-full object-contain flex items-center bg-neutral-900 justify-center overflow-hidden'
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
          />
          <div className='p-3 flex flex-col gap-3 peer w-65'>
            <div className='flex justify-between gap-3'>
              <h1 className='flex flex-wrap font-semibold'>{product.title}</h1>
              <p className='font-bold text-green-600 text-xl'>
                $${product.price}
              </p>
            </div>
            <div className='flex justify-end items-center gap-2'>
              <p className='px-2 text-sm bg-white/20 rounded-xl w-fit'>
                ${product.category}
              </p>
              <div className='px-1 text-sm bg-white/20 rounded-xl w-fit flex items-center justify-center pr-2'>
                <img
                  className='w-5 h-5'
                  src='https://cdn-icons-png.flaticon.com/512/8212/8212616.png'
                  alt='star icon'
                  width={5}
                  height={5}
                />
                <span>${product.rating.rate} </span>
              </div>
            </div>
          </div>
          <button className='p-2 font-bold hover:font-extrabold hover:bg-neutral-600 w-full items-center justify-center flex bg-neutral-800 rounded-b-xl cursor-pointer active:bg-neutral-800 opacity-0 max-h-0 overflow-hidden peer-hover:opacity-100 peer-hover:max-h-20 transition-all duration-300 delay-300 hover:opacity-100 hover:max-h-20'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ))

  return <div>{product}</div>
}
