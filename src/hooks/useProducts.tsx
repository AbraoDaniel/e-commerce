import { useContextSelector } from 'use-context-selector'
import { ProductsContext } from '../contexts/ProductsContext.tsx'

export function useProducts() {
  const teste = useContextSelector(
    ProductsContext,
    productContent => productContent.teste
  )

  const all_products = useContextSelector(
    ProductsContext,
    productContent => productContent.all_products
  )

  const searchedProducts = useContextSelector(
    ProductsContext,
    productContent => productContent.searchedProducts
  )

  const setSearchedProducts = useContextSelector(
    ProductsContext,
    productContent => productContent.setSearchedProducts
  )


  return {
    teste,
    all_products,
    searchedProducts,
    setSearchedProducts
  }
}
