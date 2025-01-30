import { Row, Typography } from "antd"
import { useTranslation } from "react-i18next"
import ProductsGridCard from "../ProductsGridCard"
import { useEffect } from "react"

const AccessoriesPage: React.FC = () => {
  const { t } = useTranslation()
  const products = [
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, discount: 10, code: 30 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 31 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 32 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 33 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 34 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 35 }
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
            {t('accessories')}
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

export default AccessoriesPage