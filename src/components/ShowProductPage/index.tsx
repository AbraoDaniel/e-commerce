import { useLocation } from "react-router-dom"
import ImageSlider from "../ImageSlider";
import { Col, Image, Row, Typography } from 'antd'
const ShowProductPage: React.FC = () => {
  const location = useLocation()
  const images = [{path: '../src/assets/TShirts/camiseta-preta.png'}, 
    {path: '../src/assets/TShirts/camiseta-preta.png'},
    {path: '../src/assets/TShirts/camiseta-preta.png'},
    {path: '../src/assets/TShirts/camiseta-preta.png'},
    {path: '../src/assets/TShirts/camiseta-preta.png'},
  ]

  console.log(location?.state, '??')
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
                {/* {JSON.stringify(location?.state?.product_discount)} */}
                <Image src={'../src/assets/TShirts/camiseta-preta.png'} width={700} height={700} />
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
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ShowProductPage