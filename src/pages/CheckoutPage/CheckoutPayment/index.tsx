import { Button, Card, Col, Divider, Row, Typography } from "antd"
import { useNavigate } from "react-router-dom"
import PaymentMethod from "./PaymentMethod"
import { CreditCardOutlined } from "@ant-design/icons"
import { MdOutlinePix } from "react-icons/md"
import { useProducts } from "../../../hooks/useProducts"
import CreditCardForm from "../../../components/CreditCardModal/CreditCardForm"


const CheckoutPayment: React.FC = () => {
  const navigate = useNavigate()
  const { selectedMethod, paymentCheckoutForm, validatedValues } = useProducts()
  function handleClickSaveAndContinue() {
    navigate('/checkout/confirmation')
  }

  const paymentMethods = [
    {icon: <MdOutlinePix style={{fontSize: 20}}/> , name: 'pix'},
    {icon: <CreditCardOutlined style={{fontSize: 20}}/>, name: 'credit_card'}
  ]

  return (
    <Row>
      <div className="checkout-delivery-container">
        <Col xs={24}>
          <Card 
          className="checkout-delivery-card"
          title={
            <div style={{display: 'inline-flex', fontSize: 14, fontWeight: 400}}>
              <div style={{marginRight: 20}}>{'Contato'}</div>
              <div>{'email'}</div>
            </div>
          } extra={<span style={{cursor: 'pointer', fontSize: 12}} onClick={() => navigate('/checkout/address')}>{'Editar'}</span>}>
            <Divider style={{marginTop: -20}} />
            <Row justify="space-between" style={{display: 'flex', alignItems: 'center'}}>
              <div style={{display: 'inline-flex'}}>
                <div style={{marginRight: 20}}>{'Endereço de entrega'}</div>
                <div>{'Rua blablabla, cidade, número'}</div>
              </div>
              <span style={{cursor: 'pointer', fontSize: 12}} onClick={() => navigate('/checkout/address')}>{'Editar'}</span>
            </Row>
            <Divider />
            <Row justify="space-between" style={{display: 'flex', alignItems: 'center'}}>
              <div style={{display: 'inline-flex'}}>
                <div style={{marginRight: 20}}>{'Método de entrega'}</div>
                <div>{'blueRabbit LTDA - Padrão R$ 15.50'}</div>
              </div>
              <span style={{cursor: 'pointer', fontSize: 12}} onClick={() => navigate('/checkout/address')}>{'Editar'}</span>
            </Row>
          </Card>
        </Col>
        <Col xs={24} style={{marginTop: 20}}>
          <Row>
            <Typography.Text style={{fontSize: 16, fontWeight: 600}}>{'Endereço de cobrança'}</Typography.Text>
          </Row>
          <Typography.Text type="secondary">{'O endereço de cobrança utilizado é o mesmo informado acima'}</Typography.Text>
        </Col>
        <Col xs={24} style={{marginTop: 20}}>
          <Row>
            <Typography.Text style={{fontSize: 16, fontWeight: 600}}>{'Pagamento'}</Typography.Text>
          </Row>
          <Typography.Text>{'Selecione a forma como deseja pagar'}</Typography.Text>
        </Col>
        <Row>
          {paymentMethods?.map((method) => {
            return (
              <PaymentMethod icon={method?.icon} method={method?.name} key={method?.name}/>
            )
          })}
        </Row>
        {validatedValues && selectedMethod === 'credit_card' && (
          <div style={{marginTop: 20}}>
            <CreditCardForm form={paymentCheckoutForm} onlyRead/>
          </div>
        )}
        
        <Col xs={24} style={{display: 'flex', justifyContent: 'end'}}>
          <Button className="checkout-button" onClick={handleClickSaveAndContinue}>
            {'Pagar agora'}
          </Button>
        </Col>
      </div>
    </Row>
  )
}

export default CheckoutPayment