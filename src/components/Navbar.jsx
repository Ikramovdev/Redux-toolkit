import { Button, Input, Modal } from 'antd'
import { useDispatch, useSelector } from "react-redux"
import React, { useState } from 'react'
import ProductsCard from "./ProductsCard"
import { deleteLikeProducts } from "../store/likedSlice"

const Navbar = ({ products, setProducts, refresh, setRefresh }) => {
  const dispatch = useDispatch()
  const [closeModal, setCloseModal] = useState(false)
  const LikedProducts = useSelector(state => state.likedList)

  function handleDeleteProduct(item) {
    const data = { ...item, isLiked: !item.isLiked }
    const updateList = products.map(value => {
      return value.id == item.id ? data : value
    })
    setProducts(updateList)
    dispatch(deleteLikeProducts(item))
  }

  function handleSearchInput(e) {
    e.preventDefault()
    const filtredData = products.filter(item => item.title.toLowercase().includes(e.target.value.toLowercase()))
    setProducts(filtredData)
    if (!e.target.value) {
      setRefresh(!refresh)
    }
  }
  return (
    <nav className='p-5 bg-blue-400 flex items-center justify-between'>
      <h1 className='font-bold font-montserrat text-[30px] text-white'>Products</h1>
      <div className='flex items-center space-x-5'>
        <Input onChange={handleSearchInput} className='w-[300px]' placeholder='Searching...' allowClear size='large' />
        <Button onClick={() => setCloseModal(true)} className='bg-transparent hover:!bg-transparent text-white hover:text-white border-[2px] border-transparent hover:border-[2px] hover:border-white duration-300' size='large' type='primary'>Like({LikedProducts.length})</Button>
      </div>
      <Modal onOk={() => setCloseModal(false)} open={closeModal} onCancel={() => setCloseModal(false)} className='!w-full h-[100%] !inset-0 !m-auto'>
        <div className='flex w-full overflow-x-auto gap-5'>
          {LikedProducts.map(item => <ProductsCard key={item.id} handleDeleteProduct={handleDeleteProduct} isDelete={true} classExtra={`min-w-[300px]`} width={200} item={item} />)}
        </div>
      </Modal>
    </nav>
  )
}

export default Navbar