/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { createContext } from 'use-context-selector'
import { defaultProductsList } from '../../util/productFields'
import { Form, FormInstance } from 'antd'

interface IProduct {
  name: string,
  collection: string,
  price: number,
  image: string,
  favorite: boolean,
  discount?: number,
  code: number
}

interface IAllProducts {
  label: string
  products: IProduct[]
}

interface ProductsContextProps {
  teste: string
  all_products: IAllProducts[]
  searchedProducts: IAllProducts[]
  setSearchedProducts: (value: IAllProducts[]) => void
  favoriteProducts: IProduct[]
  setFavoriteProducts: (value: IProduct[]) => void
  hideHeader: boolean
  setHideHeader: (value: boolean) => void
  selectedMethod: string
  setSelectedMethod: (value: string) => void
  paymentCheckoutForm: FormInstance
  validatedValues: any
  setValidatedValues: (value: any) => void
}

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
)

export const ProductsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const teste = 'aaaa'
  const all_products = defaultProductsList
  const [paymentCheckoutForm] = Form.useForm()
  const [searchedProducts, setSearchedProducts] = useState(all_products)
  const [favoriteProducts, setFavoriteProducts] = useState(
    searchedProducts.flatMap(category => 
      category?.products?.filter(product => product?.favorite) || []
    )
  )
  const [hideHeader, setHideHeader] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState('pix')
  const [validatedValues, setValidatedValues] = useState()


  return (
    <ProductsContext.Provider
      value={{
        teste,
        all_products,
        searchedProducts,
        setSearchedProducts,
        favoriteProducts,
        setFavoriteProducts,
        hideHeader,
        setHideHeader,
        selectedMethod,
        setSelectedMethod,
        paymentCheckoutForm,
        validatedValues,
        setValidatedValues
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
