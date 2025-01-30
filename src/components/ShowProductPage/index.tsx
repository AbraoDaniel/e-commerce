import { useLocation } from "react-router-dom"
import ImageSlider from "../ImageSlider";
import { Button, Col, Image, Row, Typography } from 'antd'
import { useState } from "react";
import { HeartOutlined, MinusOutlined, PlusOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useCartContent } from "../../hooks/useCardContent";
const ShowProductPage: React.FC = () => {
  const location = useLocation()
  const images = [{path: `.${location?.state?.product_image}`}, 
    {path: `.${location?.state?.product_image}`},
    {path: `.${location?.state?.product_image}`},
    {path: `.${location?.state?.product_image}`},
    {path: `.${location?.state?.product_image}`},
    {path: `.${location?.state?.product_image}`},
    {path: `.${location?.state?.product_image}`},
  ]
  const [productQty, setProductQty] = useState(1)
  const { setTotalItemsInCard, totalItemsInCard } = useCartContent()

  function handleClickAddToCart() {
    const productAlreadyInCart = localStorage.getItem(`@Danti:Cart_Products_${location?.state?.product_name?.toLowerCase()?.replace(" ", '-')}_${location?.state?.product_code}`)
    console.log(productAlreadyInCart, 'productAlreadyInCart?')
    if (!productAlreadyInCart) {
      localStorage.setItem(`@Danti:Cart_Products_${location?.state?.product_name?.toLowerCase()?.replace(" ", '-')}_${location?.state?.product_code}`, JSON.stringify({...location?.state, product_qty: productQty}))
      setTotalItemsInCard(totalItemsInCard + 1)
    }
  }

  return (
    <div className="products-view">
      <div className="reduced-view" style={{color: 'black'}}>
        <div className="product-show">
          <Row style={{width: '100%'}} >
            <Col xs={4} style={{display: 'flex', justifyContent: 'center'}}>
              <ImageSlider images={images} />
            </Col>
            <Col xs={10}>
              <div>
                <Image src={`.${location?.state?.product_image}`} width={700} height={700} />
                {location?.state?.product_discount && (
                  <div className="discount-product-flag" >
                    <Typography.Text style={{color: 'white', fontSize: 18, fontFamily: 'Bona Nova SC, sans serif'}}>{`-${location?.state?.product_discount}%`}</Typography.Text>
                  </div>
                )}
              </div>
            </Col>
            <Col xs={10}>
              <div className="payment-area">
                <Row>
                  <Typography.Text className="payment-product-name">
                    {location?.state?.product_name}
                  </Typography.Text>
                </Row>
                <Row>
                  <Typography.Text className="payment-product-price">
                    {`R$ ${!location?.state?.product_discount ? location?.state?.product_price : ((location?.state?.product_price - (location?.state?.product_price*location?.state?.product_discount/100)).toFixed(2))}`}
                  </Typography.Text>
                </Row>
                <Row>
                  <Typography.Text className="payment-product-quantity">
                    {'Quantidade'}
                  </Typography.Text>
                </Row>
                <Row justify="space-between" className="product-quantity-input">
                    <MinusOutlined className="quantity-operator" onClick={() => productQty > 1 && setProductQty((state) => state - 1)}/>
                      {productQty}
                    <PlusOutlined className="quantity-operator" onClick={() => setProductQty((state) => state + 1)}/>
                </Row>
                <Row style={{alignItems: 'center', width: 600}} justify="space-between">
                  <Col>
                    <Button className="product-add-to-cart-button" onClick={handleClickAddToCart}>
                      {'ADICIONAR AO CARRINHO'}
                      <ShoppingOutlined style={{marginBottom: 4, fontSize: 25}}  />
                    </Button>
                  </Col>
                  <Col>
                    <HeartOutlined style={{fontSize: 20, marginTop: 20, cursor: 'pointer', border: '1px solid black', borderRadius: 25, padding: '10px 10px'}} onClick={() => alert('favoritos')}/>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ShowProductPage