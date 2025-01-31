import { useLocation } from "react-router-dom"
import ImageSlider from "../../components/ImageSlider";
import { Button, Col, Image, Rate, Row, Typography } from 'antd'
import { useState } from "react";
import { HeartFilled, HeartOutlined, MinusOutlined, PlusOutlined, ShoppingOutlined } from "@ant-design/icons";
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
  const [productSize, setProductSize] = useState('')
  const { setTotalItemsInCard, totalItemsInCard } = useCartContent()

  function handleClickAddToCart() {
    const productAlreadyInCart = localStorage.getItem(`@Danti:Cart_Products_${location?.state?.product_name?.toLowerCase()?.replace(" ", '-')}_${location?.state?.product_code}`)
    console.log(productAlreadyInCart, 'productAlreadyInCart?')
    if (!productAlreadyInCart) {
      localStorage.setItem(`@Danti:Cart_Products_${location?.state?.product_name?.toLowerCase()?.replace(" ", '-')}_${location?.state?.product_code}`, JSON.stringify({...location?.state, product_qty: productQty}))
      setTotalItemsInCard(totalItemsInCard + 1)
    }
  }

  const sizes = [{size: 'pp', available: false}, 
    {size: 'p', available: true},
    {size: 'm', available: false},
    {size: 'g', available: false},
    {size: 'xg', available: true},
    {size: '1g', available: true},
    {size: '2g', available: false},
    {size: '3g', available: true}
  ]

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
                    <Typography.Text style={{color: 'white', fontSize: 18, fontFamily: 'Inter, sans serif'}}>{`-${location?.state?.product_discount}%`}</Typography.Text>
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
                <Row style={{marginBottom: 15}}>
                  <Rate allowHalf disabled defaultValue={4.5} className="product-rate"/>
                  <div className="product-rate-show">
                    <Typography.Text style={{color: 'rgb(115, 115, 115)'}}>{'9.5'}</Typography.Text>
                  </div>
                  <Typography.Text className="product-rate-description" onClick={() => alert('mostrar avaliações')}>{'Ver avaliações (20)'}</Typography.Text>
                </Row>
                <Row>
                  <Typography.Text className="payment-product-price">
                    {location?.state?.product_discount && <Typography.Text style={{marginRight: 10, color: 'red', textDecoration: 'line-through'}}>{`R$ ${location?.state?.product_price}`}</Typography.Text>}
                    {`R$ ${!location?.state?.product_discount ? location?.state?.product_price : ((location?.state?.product_price - (location?.state?.product_price*location?.state?.product_discount/100)).toFixed(2))}`}
                  </Typography.Text>
                </Row>
                <div className="size-selection">
                  <Row justify="space-between">
                    <Typography.Text style={{fontSize: 16}}>
                      {'Selecione um tamanho'}
                    </Typography.Text>
                    <Typography.Text onClick={() => alert('tabela de medidas')} style={{fontSize: 16, textDecoration: 'underline', cursor: 'pointer'}}>
                      {'Tabela de medidas'}
                    </Typography.Text>
                  </Row>
                  <Row className="sizes-available">
                    {sizes?.map((size) => {
                      return (
                        <span >
                          <span className="text-container" style={size?.available ? (size?.size === productSize ? {background: 'rgb(255, 255, 255)', boxShadow: 'rgb(0, 0, 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0.3) 0px 0px 0px 4px'} : {background: 'rgb(255, 255, 255)'}) : {background: 'linear-gradient(to right top, rgb(247, 247, 247) calc(50% - 1px), rgb(214, 214, 214), rgb(247, 247, 247) calc(50% + 1px))'}} >
                            <label className="text-label">
                              <input type="radio" name="product_size" value={size?.size} className="input-radio-sizes" onChange={(e) => setProductSize(e.target.value)}/>
                              {size?.size}
                            </label>
                          </span>
                        </span>
                      ) 
                    })}
                  </Row>
                </div>
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
                    {location?.state?.product_favorite ? (
                      <HeartFilled style={{fontSize: 20, marginTop: 20, cursor: 'pointer', border: '1px solid black', borderRadius: 25, padding: '10px 10px'}} onClick={() => alert('favoritos')}/>
                    ) : (
                      <HeartOutlined style={{fontSize: 20, marginTop: 20, cursor: 'pointer', border: '1px solid black', borderRadius: 25, padding: '10px 10px'}} onClick={() => alert('favoritos')}/>
                    )}
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