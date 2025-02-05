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

  const favoriteProducts = useContextSelector(
    ProductsContext,
    productContent => productContent.favoriteProducts
  )

  const setFavoriteProducts = useContextSelector(
    ProductsContext,
    productContent => productContent.setFavoriteProducts
  )

  const hideHeader = useContextSelector(
    ProductsContext,
    productContent => productContent.hideHeader
  )

  const setHideHeader = useContextSelector(
    ProductsContext,
    productContent => productContent.setHideHeader
  )

  return {
    teste,
    all_products,
    searchedProducts,
    setSearchedProducts,
    favoriteProducts,
    setFavoriteProducts,
    hideHeader,
    setHideHeader
  }
}
