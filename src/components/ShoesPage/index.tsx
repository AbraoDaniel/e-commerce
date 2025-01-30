import { Row, Typography } from "antd"
import { useTranslation } from "react-i18next"
import ProductsGridCard from "../ProductsGridCard"
import { useEffect } from "react"

const ShoesPage: React.FC = () => {
  const { t } = useTranslation()
  const products = [
    {name: 'Tênis preto', collection: 'Basic', price: 299.99, image: './src/assets/Shoes/tenis-preto.png', favorite: true, discount: 35, code: 24 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 25 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 26 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 27 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 28 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 29 },
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
            {t('shoes')}
          </Typography.Text>
        </Row>
      </div>
      <div className="products-view">
        <div className="reduced-view">
          <Row gutter={[16, 16]} justify="center" style={{marginBottom: 50}}> 
              {products?.map((product) => {
                return (
                  <ProductsGridCard product_name={product?.name} product_collection={product?.collection} 
                  product_price={product?.price} product_image={product?.image} product_favorite={product?.favorite} product_discount={product?.discount}
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

export default ShoesPage