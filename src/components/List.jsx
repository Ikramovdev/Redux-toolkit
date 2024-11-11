import React, { useEffect, useState } from 'react'
import { useAxios } from "../hook/useAxios"
import ProductsCard from "./ProductsCard"

const List = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    useAxios().get(`https://dummyjson.com/products`).then(res => {
      setProducts(res.data.products);
    })
  }, [])
  console.log(products);
  return (
    <div className='p-5 flex items-center justify-between gap-5 flex-wrap'>
      {products?.map(item => <ProductsCard key={item.id} item={item}/>)}
    </div>
  )
}

export default List