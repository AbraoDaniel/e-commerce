import { Button, Card, Col, Radio, Row, Typography } from "antd"
import { useNavigate } from "react-router-dom"

const CheckoutDelivery: React.FC = () => {
  const navigate = useNavigate()

  function handleClickSaveAndContinue() {
    navigate('/checkout/payment')
  }

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
            <Row justify="space-between" style={{display: 'flex', alignItems: 'center'}}>
              <div style={{display: 'inline-flex'}}>
                <div style={{marginRight: 20}}>{'Endereço de entrega'}</div>
                <div>{'Rua blablabla, cidade, número'}</div>
              </div>
              <span style={{cursor: 'pointer', fontSize: 12}} onClick={() => navigate('/checkout/address')}>{'Editar'}</span>
            </Row>
          </Card>
        </Col>
        <Col xs={24} style={{marginTop: 20}} onClick={() => alert('entrega blueRabbit')}>
          <Typography.Text>{'Entrega feita por blueRabbit LTDA'}</Typography.Text>
          <Radio className="checkout-radio" checked>
            <Typography.Text style={{marginRight: 380}}>
              Padrão
            </Typography.Text>
            <Typography.Text>
              R$ 15.50
            </Typography.Text>
          </Radio>
        </Col>
        <Col xs={24} style={{marginTop: 20}} onClick={() => alert('entrega redFox')}>
          <Typography.Text>{'Entrega feita por redFox LTDA'}</Typography.Text>
          <Radio className="checkout-radio" checked>
            <Typography.Text style={{marginRight: 400}}>
              Gratuita
            </Typography.Text>
            <Typography.Text>
              Free
            </Typography.Text>
          </Radio>
        </Col>
        <Col xs={24} style={{display: 'flex', justifyContent: 'end'}}>
          <Button className="checkout-button" onClick={handleClickSaveAndContinue}>
            {'Salvar e Continuar'}
          </Button>
        </Col>
      </div>
    </Row>
  )
}

export default CheckoutDelivery