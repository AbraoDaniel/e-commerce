import { useContextSelector } from 'use-context-selector'
import { CartContentContext } from '../contexts/CartContext.tsx'

export function useCartContent() {
  const teste = useContextSelector(
    CartContentContext,
    cartContent => cartContent.teste
  )

  const totalItemsInCard = useContextSelector(
    CartContentContext,
    cartContent => cartContent.totalItemsInCard
  )

  const setTotalItemsInCard = useContextSelector(
    CartContentContext,
    cartContent => cartContent.setTotalItemsInCard
  )

  
  
  return {
    teste,
    totalItemsInCard,
    setTotalItemsInCard
  }
}
