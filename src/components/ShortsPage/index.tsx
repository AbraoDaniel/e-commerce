import { Row, Typography } from "antd"
import { useTranslation } from "react-i18next"
import ProductsGridCard from "../ProductsGridCard"
import { useEffect } from "react"

const ShortsPage: React.FC = () => {
  const { t } = useTranslation()
  const products = [
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: true, code: 12 },
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false, code: 13 },
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false, code: 14 },
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false, code: 15 },
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false, code: 16 },
  ]

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  return (
    <>
      <div className="category-header">
        <Row>
          <Typography.Text className="category-product-label">
            {'Categoria'}
          </Typography.Text>
        </Row>
        <Row>
          <Typography.Text className="category-name">
            {t('shorts')}
          </Typography.Text>
        </Row>
      </div>
      <div className="products-view">
        <div className="reduced-view">
          <Row gutter={[16, 16]} justify="center" style={{marginBottom: 50}}> 
              {products?.map((product) => {
                return (
                  <ProductsGridCard product_name={product?.name} product_collection={product?.collection} 
                  product_price={product?.price} product_image={product?.image} product_favorite={product?.favorite}
                  product_code={product?.code}
                  />
                )
              })}
          </Row>
        </div>
      </div>
    </>
  )
}

export default ShortsPage