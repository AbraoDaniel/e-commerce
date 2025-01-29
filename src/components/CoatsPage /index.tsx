import { Row, Typography } from "antd"
import { useTranslation } from "react-i18next"
import ProductsGridCard from "../ProductsGridCard"
import { useEffect } from "react"

const CoatsPage: React.FC = () => {
  const { t } = useTranslation()
  const products = [
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: true },
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false },
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false },
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false },
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false },
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
            {t('coats')}
          </Typography.Text>
        </Row>
      </div>
      <div className="products-view">
        <div className="reduced-view">
          <Row gutter={[16, 16]} justify="center" style={{marginBottom: 50}}> 
              {products?.map((product) => {
                return (
                  <ProductsGridCard product_name={product?.name} product_collection={product?.collection} 
                  product_price={product?.price} product_image={product?.image} product_favorite={product?.favorite}/>
                )
              })}
          </Row>
        </div>
      </div>
    </>
  )
}

export default CoatsPage