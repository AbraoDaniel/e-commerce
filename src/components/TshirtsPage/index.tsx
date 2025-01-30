import { Row, Typography } from "antd"
import { useTranslation } from "react-i18next"
import ProductsGridCard from "../ProductsGridCard"
import { useEffect } from "react"

const TshirtsPage: React.FC = () => {
  const { t } = useTranslation()
  const products = [
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: true, discount: 15, code: 6 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: false, code: 7 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: false, code: 8 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: true, code: 9 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: false, code: 10 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: true, code: 11 }
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
            {t('tshirts')}
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

export default TshirtsPage