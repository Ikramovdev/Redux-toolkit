import { DeleteOutlined, LikeOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

const ProductsCard = ({ item, width, classExtra, isDelete, handleLikeBtnClick, handleDeleteProduct }) => {
    return (
        <Card
            className={`border-[2px] ${classExtra} border-transparent hover:border-[2px] hover:shadow-lg hover:shadow-blue-400 hover:border-blue-400`}
            hoverable
            style={{ width: width, }}
            cover={<img className='h-[300px] object-contain' alt="example" src={item.images[0]} />}
        >
            <Meta title={item.title} description={<p className='line-clamp-3'>{item.description}</p>} />
            <Meta>description={isDelete
                ? <Button onClick={() => handleDeleteProduct(item)} className={`w-full mt-5 inline-block bg-red-500 text-white border-red-500 hover:bg-red-500 hover:border-red-500 hover:!text-white`} size='small' ><DeleteOutlined className='scale-[1.7]' /></Button>
                : <Button onClick={() => handleLikeBtnClick(item)} className={`w-full mt-5 inline-block ${item.isLiked ? "inline-block bg-red-500 text-white border-red-500 hover:bg-red-500 hover:border-red-500 hover:!text-white" : ""}`} size='small'><LikeOutlined className='scale-[1.7]' /></Button>}
            </Meta>
        </Card>
    )
}

export default ProductsCard