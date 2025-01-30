import { Row, Typography } from "antd"
import { useTranslation } from "react-i18next"
import ProductsGridCard from "../ProductsGridCard"
import { useEffect } from "react"

const PantsPage: React.FC = () => {
  const { t } = useTranslation()
  const products = [
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, discount: 10, code: 17 },
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 18},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 19},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 20},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 21},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 22},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 23}
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
            {t('pants')}
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

export default PantsPage