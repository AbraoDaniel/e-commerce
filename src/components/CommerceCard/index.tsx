import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import { Card, Row, Typography } from "antd"
import { useState } from "react"

interface ICommerceCard {
  product_name: string
  product_collection: string
  product_price: number
  product_image: string
  product_favorite: boolean
  product_discount?: number
}

const CommerceCard:React.FC<ICommerceCard> = ({product_name, product_collection, product_price, product_image, product_favorite, product_discount }) => {
  const [heartHover, setHeartHover] = useState(product_favorite)

  return (
    <Card
      className="product-card"
    > 
      <Row style={{marginBottom: '-20px'}}>
        <img
          alt={product_name}
          src={product_image}
          style={{height: 367, width: "100%", borderRadius: 6}}
        />
        <div onMouseEnter={() => setHeartHover(true)} onMouseLeave={() => setHeartHover(false)}>
          {heartHover ? (<HeartFilled style={{ cursor: 'pointer', fontSize: 25, position: 'relative', left: 340, bottom: 350}}/>) : (
            <HeartOutlined className='product-favorite-icon' style={{ cursor: 'pointer', fontSize: 25, position: 'relative', left: 340, bottom: 350}}/>
          )}
        </div>
      </Row>
      <Row>
        <Typography.Text style={{fontWeight: 600, marginLeft: 5}}>
          {product_name}
        </Typography.Text>
      </Row>
      <Row>
        <Typography.Text style={{fontWeight: 500,  marginLeft: 5}}>
          {product_collection}
        </Typography.Text>
      </Row>
      <Row>
        {product_discount ? (
              <>
                <Typography.Text style={{marginTop: 2, fontWeight: 500, color: 'red', fontSize: 15, marginLeft: 5, textDecoration: 'line-through' }}>
                {`R$ ${product_price}`}
                </Typography.Text>
                <Typography.Text style={{marginTop: 2, fontWeight: 600, fontSize: 16, marginLeft: 5 }}>
                  {`R$ ${(product_price - (product_price*product_discount/100)).toFixed(2)}`}
                </Typography.Text>
              </>
            ) : (
              <Typography.Text style={{marginTop: 2, fontWeight: 600, fontSize: 16, marginLeft: 5 }}>
                {`R$ ${product_price}`}
              </Typography.Text>
            )}
      </Row>
    </Card>
  )
}

export default CommerceCard