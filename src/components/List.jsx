import React, { useEffect } from 'react'
import ProductsCard from "./ProductsCard"
import { useDispatch } from 'react-redux'
import { savedLikedProducts } from "../store/likedSlice"
import { useAxios } from "../hook/useAxios"


const List = ({products, setProducts, refresh}) => {
  const dispatch = useDispatch({ products, setProducts, refresh })
  useEffect(() => {
    useAxios().get(`https://dummyjson.com/products`).then(res => {
      setProducts(res.data.products.map(item => {
        item.isLiked = false
        return item
      }))
    })
  }, [refresh])

  function handleLikeBtnClick(item) {
    const data = { ...item, isLiked: !item.isLiked }
    const updateList = products.map(value => {
      return value.id == item.id ? data : value
    })
    setProducts(updateList)
    dispatch(savedLikedProducts(data))
  }
  return (
    <div className='p-5 flex items-center justify-between gap-5 flex-wrap'>
      {products.map(item => <ProductsCard width={300} handleLikeBtnClick={handleLikeBtnClick} key={item.id} item={item} />)}
    </div>
  )
}

export default List