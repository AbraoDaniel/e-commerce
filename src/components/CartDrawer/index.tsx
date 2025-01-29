import { ShoppingOutlined } from "@ant-design/icons"
import { Drawer, Row, Typography } from "antd"

interface ICartDrawer {
  setVisibleCartDrawer: (value: boolean) => void
}
const CartDrawer: React.FC<ICartDrawer> = ({setVisibleCartDrawer}) => {

  return (
    <Drawer 
      title={
        <Row justify="space-between">
          <div />
          <Typography.Text style={{fontSize: 20, fontWeight: 500}}>
            {'Meu carrinho'}
          </Typography.Text>
          <ShoppingOutlined style={{fontSize: 20}} />
        </Row>
      }
      open 
      width={700}
      onClose={() => setVisibleCartDrawer(false)}
      className='cart-drawer-empty'
    >
      <div style={{textAlign: 'center'}}>
        <ShoppingOutlined style={{fontSize: 60, color: 'rgb(0 0 0 / 48%)'}} /><br/>
        <Typography.Text style={{fontSize: 30, color: 'rgb(0 0 0 / 48%)'}}>{'Seu carrinho está vazio'}</Typography.Text><br/>
      </div>
    </Drawer>
  )
}

export default CartDrawer