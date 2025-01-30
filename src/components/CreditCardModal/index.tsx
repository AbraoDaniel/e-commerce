import { Col, Modal, Row, Form, Input, DatePicker } from "antd"
import { useState } from "react"
import { VisaCardFlag } from "../../assets/CardsFlags"
import { EllipsisOutlined } from "@ant-design/icons"
import dayjs from 'dayjs'


interface ICreditCardModal {
  setShowCreditCardModal: (value: boolean) => void
}
const CreditCardModal: React.FC<ICreditCardModal> = ({setShowCreditCardModal}) => {
  const [creditCardForm] = Form.useForm()
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiration, setCardExpiration] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [isFlipped, setIsFlipped] = useState(false)

  function handleChangeFormValue() {
    const formFields = creditCardForm?.getFieldsValue()
    setCardNumber(formFields?.credit_card_number)
    setCardName(formFields?.credit_card_name)
    setCardExpiration(dayjs(formFields?.credit_card_expiration_date).format('MM/YY'))
    setCardCvv(formFields?.credit_card_cvv)
  }

  return (
    <Modal open onCancel={() => setShowCreditCardModal(false)} className="credit-card-modal">
      <div className="credit-card-wrap">
        <Row justify="center">
          <Col>
          <div className="credit-card-container">
            <div className={`credit-card ${isFlipped ? "flipped" : ""}`}>
              <div className="credit-card-front">
                <Row justify="space-between" className="credit-card-first-row">
                  <div>
                    <EllipsisOutlined style={{ fontSize: 25, color: "white" }} />
                  </div>
                  <div className="credit-card-flag">
                    <VisaCardFlag size={80} />
                  </div>
                </Row>
                <div style={{ backgroundColor: "transparent", height: 130 }} />
                <Row justify="space-between" className="credit-card-second-row">
                  <div className="card-name">{cardName?.length > 0 ? cardName : "João da Silva"}</div>
                  <div className="card-expiration">{cardExpiration?.length > 0 ? cardExpiration : "01/30"}</div>
                </Row>
                <Row className="credit-card-third-row">
                  <div className="card-number">
                    {cardNumber?.length > 0 ? cardNumber?.match(/.{1,4}/g)?.join(" ") : "1234 5678 9123 4567"}
                  </div>
                </Row>
              </div>
              <div className="credit-card-back">
                <div className="black-strip" style={{ width: "100%", height: "40px", background: "#000", marginBottom: "10px" }} />
                <div className="cvv-box" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ color: "#aaa", fontSize: "12px" }}>CVV</span>
                  <div style={{ background: "black", color: "white", padding: "5px 15px", borderRadius: "5px", fontSize: "18px", fontWeight: "bold", letterSpacing: 6 }}>
                    <span style={{marginRight: -5, display: 'flex'}}>
                      {cardCvv?.length > 0 ? cardCvv : '***'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          </Col>
        </Row>
        <Row justify="start" className="credit-card-form" style={{width: '100%'}}>
          <Form layout="vertical" form={creditCardForm} requiredMark={false} style={{width: '100%'}}>
            <Col xs={24}>
              <Form.Item  label="Número do cartão" name="credit_card_number" rules={[{required: true, message: 'Por favor, informe o número do cartão'}]}>
                <Input maxLength={16} placeholder="1234 5678 9123 4567" className="credit-card-input" onChange={() => handleChangeFormValue()}/>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item className="form-credit-card-name" label="Nome presente no cartão" name="credit_card_name" rules={[{required: true, message: 'Por favor, informe o nome presente no cartão'}]}>
                <Input maxLength={30} placeholder="João da Silva" className="credit-card-input" onChange={() => handleChangeFormValue()}/>
              </Form.Item>
            </Col>
            <Row justify="space-between" style={{alignItems: 'center'}}>
              <Col xs={11}>
                <Form.Item  label="Data de expiração" name="credit_card_expiration_date" rules={[{required: true, message: 'Por favor, informe a data de expiração do cartão'}]}>
                  <DatePicker format={"MM/YY"} picker="month" className="credit-card-input" onChange={() => handleChangeFormValue()}/>
                </Form.Item>
              </Col>
              <Col xs={11}>
                <Form.Item label="CVV" name="credit_card_cvv" rules={[{required: true, message: ''},
                  {
                    validator: async (_, value) => {
                      if (!value || value?.length < 3 || value?.length > 3) {
                        return Promise.reject("Informe um CVV válido")
                      }
                    }
                  }
                ]}>
                  <Input type="number" onClick={() => setIsFlipped(true)} onBlur={() => setIsFlipped(false)} maxLength={3} placeholder="111" className="credit-card-input" onChange={() => handleChangeFormValue()}/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Row>
      </div>
    </Modal>
  )
}

export default CreditCardModal