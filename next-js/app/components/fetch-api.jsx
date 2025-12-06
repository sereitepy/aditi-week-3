import React from 'react'
import Image from 'next/image'
import Cart from '@/app/components/cart'
import Shop from '@/app/components/shop'

async function GetData(url) {
  // const url = 'https://fakestoreapi.com/products'
  // const url = 'http://localhost:4000/shop'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.error(error.message)
  }
}

export default async function Data() {
  // const personURL = 'http://localhost:4000/person'
  const shopURL = 'http://localhost:4000/shop'

  const data = await GetData(shopURL)

  return (
    <>
      <Shop data={data} />
    </>
  )
}
