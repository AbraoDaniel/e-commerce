/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { createContext } from 'use-context-selector'
import { defaultProductsList } from '../../util/productFields'
import { Form, FormInstance } from 'antd'

interface IProduct {
  name: string,
  collection: string,
  price: number,
  images: string[],
  favorite: boolean,
  discount?: number,
  code: number
}

interface IAllProducts {
  label: string
  products: IProduct[]
}

interface ProductsContextProps {
  all_products: IAllProducts[]
  searchedProducts: IAllProducts[]
  setSearchedProducts: (value: IAllProducts[]) => void
  hideHeader: boolean
  setHideHeader: (value: boolean) => void
  selectedMethod: string
  setSelectedMethod: (value: string) => void
  paymentCheckoutForm: FormInstance
  validatedValues: any
  setValidatedValues: (value: any) => void
  favoriteProductsIds: string[]
  setFavoriteProductsIds: (value: any) => void
  visibleSummary: boolean
  setVisibleSummary: (value: boolean) => void
  isButtonVisible: boolean
  setIsButtonVisible: (value: boolean) => void
 }

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
)

export const ProductsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const all_products = defaultProductsList
  const [paymentCheckoutForm] = Form.useForm()
  const [searchedProducts, setSearchedProducts] = useState(all_products)
  const [favoriteProductsIds, setFavoriteProductsIds] = useState(() => {
    const storagedIds = localStorage.getItem('@Danti:FavoriteProducts')
    return storagedIds ? storagedIds.split(',') : []
  })
  const [hideHeader, setHideHeader] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState('pix')
  const [validatedValues, setValidatedValues] = useState()
  const [visibleSummary, setVisibleSummary] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false);


  return (
    <ProductsContext.Provider
      value={{
        all_products,
        searchedProducts,
        setSearchedProducts,
        hideHeader,
        setHideHeader,
        selectedMethod,
        setSelectedMethod,
        paymentCheckoutForm,
        validatedValues,
        setValidatedValues,
        favoriteProductsIds,
        setFavoriteProductsIds,
        visibleSummary,
        setVisibleSummary,
        isButtonVisible,
        setIsButtonVisible
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
