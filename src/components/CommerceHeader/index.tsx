import { Input, Layout, Menu, Row, Space } from 'antd';
import { HeartOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartDrawer from '../CartDrawer';

const CommerceHeader: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { Header } = Layout;
  const [currentTab, setCurrentTab] = useState(location?.pathname?.split('/')[1])
  const [visibleCartDrawer, setVisibleCartDrawer] = useState(false)

  const items = [
    {key: 'tshirts', label: 'CAMISETAS'},
    {key: 'coats', label: 'BLUSAS'},
    {key: 'shorts', label: 'BERMUDAS'},
    {key: 'pants', label: 'CALÇAS'},
    {key: 'shoes', label: 'CALÇADOS'},
    {key: 'accessories', label: 'ACESSÓRIOS'},
  ]

  useEffect(() => {
    const path = location?.pathname?.split('/')[1]
    setCurrentTab(path)
  }, [location?.pathname])

  return (
    <Header className="main-header">
        <Row justify="center">
          <div className="header-logo" onClick={() => {
            navigate('/')
            setCurrentTab('')
            }}>DANTI</div>
        </Row>
        <Row justify="center" style={{alignItems: 'center'}}>
          <Space.Compact size="large" style={{position: 'absolute', left: 50}}>
            <Input addonBefore={<SearchOutlined id="search-icon" />} placeholder="Search" className='input-search-header' id="search-header" />
          </Space.Compact>
          <Menu
            className='header-menu'
            mode="horizontal"
            selectedKeys={[currentTab]}
            onClick={(value) => {
              navigate(value?.key)
              setCurrentTab(value?.key)
            }}
            items={items}
          />
          <span style={{position: 'absolute', right: 50, fontSize: 25}}>
            <UserOutlined style={{marginRight: 10, cursor: 'pointer'}} onClick={() => alert('usuário')}/>
            <HeartOutlined style={{marginRight: 10, cursor: 'pointer'}} onClick={() => alert('favoritos')}/>
            <ShoppingOutlined onClick={() => setVisibleCartDrawer(true)} />
          </span>
        </Row>
        {visibleCartDrawer && <CartDrawer setVisibleCartDrawer={setVisibleCartDrawer} />}
      </Header>
  )
}

export default CommerceHeader