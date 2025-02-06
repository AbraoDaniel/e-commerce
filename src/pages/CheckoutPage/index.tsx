import { Breadcrumb, Col, Row, Typography } from "antd"
import { useProducts } from "../../hooks/useProducts"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CheckoutAddress from "./CheckoutAddress"
import CheckoutDelivery from "./CheckoutDelivery"
import CheckoutPayment from "./CheckoutPayment"
import CheckoutConfirm from "./CheckoutConfirm"
// import { useLocation } from "react-router-dom"


const CheckoutPage: React.FC = () => {
  // const location = useLocation()
  const navigate = useNavigate()
  const { setHideHeader } = useProducts()
  const { transition_status } = useParams()
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

    return () => {
      setHideHeader(false)
    }
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

  return (
    <div className="checkout-container">
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
            {'cart'}
          </div>
        </Col> 
      </Row>
    </div>
  )
}

export default CheckoutPage