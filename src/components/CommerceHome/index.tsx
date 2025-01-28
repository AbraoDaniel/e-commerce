import { Breadcrumb } from "antd"
import CommerceContent from "../CommerceContent"

const CommerceHome:React.FC = () => {
  const product_categories = [{
    label: 'Camisetas',
    products: [
      {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: true },
      {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: false },
      {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: false },
      {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: true },
      {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: false },
      {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: true }
    ]
  }, 
  {
    label: 'Blusas',
    products: [
      {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: true },
      {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false },
      {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false },
      {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false },
      {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false },
    ]
  },
  {
    label: 'Bermudas',
    products: [
      {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: true },
      {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false },
      {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false },
      {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false },
      {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false },
    ]
  }
]

  return (
    <>
      <Breadcrumb
        style={{ marginTop: '20px', marginLeft: '50px' }} 
        items={[
          {title: 'Home', href: '/'},
          // {title: location?.pathname?.split('/')[1], path: location?.pathname?.split('/')[1]}
        ]}
      
      />
      {product_categories?.map(category => {
        return (<CommerceContent category={category?.label} products={category?.products}  />)
      })}
    </>
  )
}

export default CommerceHome