import { LikeOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

const ProductsCard = ({item}) => {
    return (
        <Card
            className='border-[2px] border-transparent hover:border-[2px] hover:shadow-lg hover:shadow-blue-400 hover:border-blue-400'
            hoverable
            style={{
                width: 240,
            }}
            cover={<img className='h-[300px] object-contain' alt="example" src={item.images[0]} />}
        >
            <Meta title={item.title} description={<p className='line-clamp-3'>{item.description}</p>} />
            <Meta description={<Button className='w-full mt-5 inline-block' size='large'><LikeOutlined className='scale-[1.7]'/></Button>}/>
        </Card>
    )
}

export default ProductsCard