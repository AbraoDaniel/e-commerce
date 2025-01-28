import { Layout, Typography } from 'antd';
import CommerceCard from '../CommerceCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const { Content } = Layout;

interface ICommerceCard {
  name: string
  collection: string
  price: number
  image: string
  favorite: boolean
  discount?: number
}

interface ICommerceContent {
  category: string
  products: ICommerceCard[]
}

const CommerceContent: React.FC<ICommerceContent> = ({category, products}) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  
  return (
    <Content style={{ padding: '10px 48px', marginBottom: 20 }}>
      <Typography.Text className={'category-label'} onClick={() => navigate(category)}>{t(category)}</Typography.Text>
      <div className='content-wrap'>
        {products?.map((product) => {
          return (
            <CommerceCard product_name={product?.name} product_collection={product?.collection} 
            product_price={product?.price} product_image={product?.image} product_favorite={product?.favorite} product_discount={product?.discount}
            />
          )
        })}
      </div>
    </Content>
  )
}

export default CommerceContent