import { Badge, Input, Layout, Menu, Row, Space } from 'antd';
import { HeartFilled, HeartOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartDrawer from '../CartDrawer';
import { useCartContent } from '../../hooks/useCardContent';
import { debounce } from 'lodash'
import { useProducts } from '../../hooks/useProducts';
import { removeAccents } from '../../util/removeAccents';

const CommerceHeader: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { Header } = Layout;
  const [currentTab, setCurrentTab] = useState(location?.pathname?.split('/')[1])
  const [visibleCartDrawer, setVisibleCartDrawer] = useState(false)
  const { totalItemsInCard } = useCartContent()
  const { all_products, setSearchedProducts } = useProducts()

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSearchProducts(e: any) {
    const searchTerm = removeAccents(e.target.value?.toLowerCase()); 
    const filteredProducts = all_products
      .map(category => ({
        ...category,
        products: category?.products?.filter(product => 
          removeAccents(product?.name?.toLowerCase())?.includes(searchTerm) 
        )
      }))
      .filter(category => category?.products?.length > 0); 
  
    setSearchedProducts(filteredProducts)
  }

  return (
    <Header className="main-header">
        {visibleCartDrawer && <CartDrawer setVisibleCartDrawer={setVisibleCartDrawer} />}
        <Row justify="center">
          <div className="header-logo" onClick={() => {
            navigate('/')
            setCurrentTab('')
            }}>DANTI</div>
        </Row>
        <Row justify="center" style={{alignItems: 'center'}}>
          <Space.Compact size="large" style={{position: 'absolute', left: 50}}>
            <Input addonBefore={<SearchOutlined id="search-icon" />} placeholder="Search" className='input-search-header' id="search-header" onChange={
              debounce(onSearchProducts, 500)
            }/>
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
            {location?.pathname === '/wishlist' ? (<HeartFilled style={{marginRight: 10, cursor: 'pointer'}}/>) : (
              <HeartOutlined style={{marginRight: 10, cursor: 'pointer'}} onClick={() => navigate('/wishlist')}/>
            )}
            <Badge count={totalItemsInCard} style={{backgroundColor: 'black'}}>
              <ShoppingOutlined style={{fontSize: 25}} onClick={() => setVisibleCartDrawer(true)} />
            </Badge>
          </span>
        </Row>
        
      </Header>
  )
}

export default CommerceHeader