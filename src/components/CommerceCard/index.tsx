import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import { Card, Row, Typography } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface ICommerceCard {
  product_name: string
  product_collection: string
  product_price: number
  product_image: string
  product_favorite: boolean
  product_code: number
  product_discount?: number
}

const CommerceCard:React.FC<ICommerceCard> = ({product_name, product_collection, product_price, product_image, product_favorite, product_discount, product_code }) => {
  const [heartHover, setHeartHover] = useState(product_favorite)
  const navigate = useNavigate()

  function handleClickToViewProduct() {
    navigate(`/products/${product_name?.toLowerCase()?.replace(" ", "-")}`, {state: {
      product_name, product_collection, product_price, product_image, product_favorite, product_discount, product_code
    }})
  }

  return (
    <Card
      className="product-card"
      onClick={handleClickToViewProduct}
    > 
      <Row style={{marginBottom: '-30px'}}>
        <img
          alt={product_name}
          src={product_image}
          className="card-image"
        />
        <div onMouseEnter={() => setHeartHover(true)} onMouseLeave={() => setHeartHover(false)}>
          {heartHover ? (<HeartFilled className="main-product-favorite-icon" />) : (
            <HeartOutlined className='main-product-favorite-icon'/>
          )}
        </div>
      </Row>
      <Row>
        <Typography.Text className="product-name" >
          {product_name}
        </Typography.Text>
      </Row>
      <Row>
        <Typography.Text className="product-collection">
          {product_collection}
        </Typography.Text>
      </Row>
      <Row>
        {product_discount ? (
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography.Text className="product-price-with-discount">
                {`R$ ${product_price}`}
                </Typography.Text>
                <Typography.Text className="product-price-without-discount">
                  {`R$ ${(product_price - (product_price*product_discount/100)).toFixed(2)}`}
                </Typography.Text>
              </div>
            ) : (
              <Typography.Text className="product-price-without-discount">
                {`R$ ${product_price}`}
              </Typography.Text>
            )}
      </Row>
    </Card>
  )
}

export default CommerceCard