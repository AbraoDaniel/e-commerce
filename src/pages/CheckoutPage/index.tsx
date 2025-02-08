import { Image, Badge, Breadcrumb, Col, Row, Typography, Input, Button, message } from "antd"
import { useProducts } from "../../hooks/useProducts"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CheckoutAddress from "./CheckoutAddress"
import CheckoutDelivery from "./CheckoutDelivery"
import CheckoutPayment from "./CheckoutPayment"
import CheckoutConfirm from "./CheckoutConfirm"
import { useLocation } from "react-router-dom"
import { validsPromotionalCodes } from "../../util/productFields"


const CheckoutPage: React.FC = () => {
  const location = useLocation()
  const deliveryMethod = location?.state?.deliveryMethod
  const deliveryValue = Number(deliveryMethod?.split(' ')[deliveryMethod?.split(' ')?.length - 1])
  const navigate = useNavigate()
  const { setHideHeader } = useProducts()
  const { transition_status } = useParams()
  const entries = Object.entries(localStorage)
  const [totalPrice, setTotalPrice] = useState(0)
  const [inputPromotionalCode, setInputPromotionalCode] = useState('')
  const [validPromotionalCode, setValidPromotionalCode] = useState<{code: string, value: string}>({code: '', value: ''})
  const [messageApi, contextHolder] = message.useMessage();

  const cartList = entries?.map((a) => {
    if (a[0]?.includes("@Danti:Cart_Products")) {
      const parsed_product = JSON.parse(a[1])     
      return parsed_product
    }
  })?.filter(b => b)
  const routes = [
    {
      title: 'Tela inicial',
      href: '/'
    },
    {
      title: 'Endereço',
      href: '/checkout/address'
    },
    {
      title: 'Entrega',
      href: '/checkout/delivery'
    },
    {
      title: 'Pagamento',
      href: '/checkout/payment'
    },
    {
      title: 'Confirmação',
      href: '/checkout/confirmation'
    }
  ]

  useEffect(() => {
    setHideHeader(true)
    cartList?.map((product) => {
      setTotalPrice(state => state + 
        (!product?.product_discount ? product?.product_price* product?.product_qty : ((product?.product_price - (product?.product_price*product?.product_discount/100)) * product?.product_qty)
      ))
    })

    return () => {
      setHideHeader(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function itemRender(currentRoute: any, params: any, items: any) {
    const refs = items?.map((item: {href: string}) => item?.href)
    const indexOfLocation = refs?.indexOf(location.pathname)
    const currentIndex = refs?.indexOf(currentRoute?.href)
    return currentRoute?.href === location.pathname ? (
      <span style={{fontWeight: 600, color: "black"}}>{currentRoute.title}</span>
    ) : currentIndex > indexOfLocation ? (<span>{currentRoute.title}</span>) : (
      <span style={{cursor: 'pointer'}} onClick={() => navigate(currentRoute?.href)}>{currentRoute.title}</span>
    )
  }

  function renderCurrentCheckoutStatus() {

    switch(transition_status) {
      case 'address':
        return <CheckoutAddress />
      case 'delivery':
        return <CheckoutDelivery />
      case 'payment':
        return <CheckoutPayment />
      case 'confirmation':
        return <CheckoutConfirm />
      default:
        return <h1>{'Ocorreu um problema'}</h1>
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChangeInputPromotional(e: any) {
    setInputPromotionalCode(e.target.value.toLowerCase())
  }

  const success= () => {
    messageApi.open({
      type: 'success',
      content: 'Cupom aplicado com sucesso!'
    });
  };

  const error= () => {
    messageApi.open({
      type: 'error',
      content: 'Cupom inválido!'
    });
  };

  function checkIfPromotionalCodeIsValid() {
    const codes = validsPromotionalCodes?.map((c) => c?.code?.toLowerCase())
    if (codes?.includes(inputPromotionalCode)) {
      const validCode = validsPromotionalCodes?.filter((c) => c?.code?.toLowerCase() === inputPromotionalCode)
      setValidPromotionalCode(validCode[0])
      success()
    } else {
      error()
    }
  }

  return (
    <div className="checkout-container">
      {contextHolder}
      <Row >
        <Col xs={14} className="checkout-informations">
          <Typography.Text className="danti-logo-checkout">{'DANTI'}</Typography.Text>
          <Breadcrumb itemRender={itemRender} className="checkout-breadcrumb" separator=">" items={routes} />
          <div className="checkout-form">
            {renderCurrentCheckoutStatus()}
          </div>
        </Col>  
        <Col xs={10} className="checkout-cart-summary">
          <div className="cart-products">
            <div className="cart-images">
              {cartList?.map((product) => {
                return (
                  <Row justify="space-between" style={{alignItems: 'center', marginBottom: 20}} key={product?.product_code}>
                    <Col xs={5}>
                      <Badge count={product?.product_qty} className="checkout-badge">
                        <Image preview={false} className="checkout-image" src={`.${product?.product_image}`} style={{width: 70, height: 70}}/>
                      </Badge>
                    </Col>
                    <Col xs={12}>
                      <span style={{fontWeight: 600}}>{product?.product_name}</span>
                      <Row>
                        <Typography.Text style={{fontSize: 11}}>
                          {`Tamanho: ${product?.product_size}`}
                        </Typography.Text>
                      </Row>
                    </Col>
                    <Col xs={6}>
                      {product?.product_discount && (
                        <Row>
                          <Typography.Text style={{fontSize: 14}} className="cart-product-price-with-discount" >
                            {`R$ ${product?.product_price}`}
                          </Typography.Text>
                        </Row>
                      )}
                      <span style={{fontWeight: 600}}>{`R$ ${!product?.product_discount ? product?.product_price : ((product?.product_price - (product?.product_price*product?.product_discount/100)).toFixed(2))}`}</span>
                    </Col>
                  </Row>
                )
              })}
            </div>
            <div className="cart-values" style={{width: '100%', padding: '10px 8px'}}> 
              <Row justify="space-between">
                <Col xs={18}>
                  <Input  onChange={handleChangeInputPromotional} className="input-cart-values" maxLength={10} placeholder="Código promocional"/>
                </Col>
                <Button disabled={!(inputPromotionalCode?.length > 0)} onClick={checkIfPromotionalCodeIsValid} className="button-cart-values">{'Aplicar'}</Button>
              </Row>
              <div style={{marginTop: 20}}>
                <Row justify="space-between">
                  <Typography.Text style={{fontFamily: 'Inter'}}>{'Subtotal:'}</Typography.Text>
                  <Typography.Text style={{fontFamily: 'Inter'}}>
                    {`R$ ${totalPrice?.toFixed(2)}`}
                  </Typography.Text>
                </Row>
                {deliveryMethod && (
                  <Row justify="space-between">
                    <Typography.Text style={{fontFamily: 'Inter'}}>{'Frete:'}</Typography.Text>
                    <Typography.Text style={{fontFamily: 'Inter'}}>
                      {deliveryValue ? (`R$ ${deliveryValue?.toFixed(2)}`) : ('Grátis')}
                    </Typography.Text>
                  </Row>
                )}
                {validPromotionalCode?.code?.length > 0 && (
                  <Row justify="space-between">
                    <Typography.Text style={{fontFamily: 'Inter', fontWeight: 600, color: 'green'}}>{'Desconto Promocional:'}</Typography.Text>
                    <Typography.Text style={{fontFamily: 'Inter', fontWeight: 600, color: 'green'}}>
                      {`R$ ${validPromotionalCode?.value}.00`}
                    </Typography.Text>
                  </Row>
                )}
                <Row justify="space-between">
                  <span style={{fontWeight: 600, fontSize: 18, fontFamily: 'Inter'}}>{'Total:'}</span>
                  <Typography.Text style={{fontWeight: 600, fontSize: 18, fontFamily: 'Inter'}}>
                    {deliveryValue ? (`R$ ${Number(totalPrice?.toFixed(2)) + Number(deliveryValue?.toFixed(2)) - Number(validPromotionalCode?.value)}`) : (`R$ ${Number(totalPrice?.toFixed(2)) - Number(validPromotionalCode?.value)}`)}
                  </Typography.Text>
                </Row>
              </div>
            </div>
          </div>
        </Col> 
      </Row>
    </div>
  )
}

export default CheckoutPage