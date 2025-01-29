import { Row, Typography } from "antd"
import { useTranslation } from "react-i18next"
import ProductsGridCard from "../ProductsGridCard"
import { useEffect } from "react"

const PantsPage: React.FC = () => {
  const { t } = useTranslation()
  const products = [
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, discount: 10 },
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true}
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
                  product_price={product?.price} product_image={product?.image} product_favorite={product?.favorite} product_discount={product?.discount}/>
                )
              })}
          </Row>
        </div>
      </div>
    </>
  )
}

export default PantsPage