import { useProducts } from "../../hooks/useProducts"
import CommerceContent from "../../components/CommerceContent"

const CommerceHome:React.FC = () => {
  const { searchedProducts } = useProducts()

  return (
    <>
      <br />
      {searchedProducts?.map(category => {
        return (<CommerceContent category={category?.label} products={category?.products}  />)
      })}
    </>
  )
}

export default CommerceHome