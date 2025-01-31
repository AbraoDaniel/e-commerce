/* eslint-disable @typescript-eslint/no-explicit-any */
import AccessoriesPage from "../../components/AccessoriesPage";
import CoatsPage from "../../components/CoatsPage ";
import CommerceHome from "../../components/CommerceHome";
import PantsPage from "../../components/PantsPage";
import ShoesPage from "../../components/ShoesPage";
import ShortsPage from "../../components/ShortsPage";
import ShowProductPage from "../../components/ShowProductPage";
import TshirtsPage from "../../components/TshirtsPage";

export const routePathsAndElements: any = [
  {path: '/', element: <CommerceHome />},
  {path: '/tshirts', element: <TshirtsPage />},
  {path: '/shorts', element: <ShortsPage />},
  {path: '/coats', element: <CoatsPage />},
  {path: '/pants', element: <PantsPage />},
  {path: '/shoes', element: <ShoesPage />},
  {path: '/accessories', element: <AccessoriesPage />},
  {path: '/products/:product_name', element: <ShowProductPage />},
]

export const defaultProductsList = [{
  label: 'tshirts',
  products: [
    {name: 'Camiseta preta lisa', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: true, discount: 15, code: 6 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: false, code: 7 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: false, code: 8 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: true, code: 9 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: false, code: 10 },
    {name: 'Camiseta preta', collection: 'Basic', price: 89.99, image: './src/assets/TShirts/camiseta-preta.png', favorite: true, code: 11 }
  ]
}, 
{
  label: 'coats',
  products: [
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: true, code: 1 },
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false, code: 2 },
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false, code: 3 },
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false, code: 4 },
    {name: 'Casaco preto', collection: 'Basic', price: 89.99, image: './src/assets/Coats/casaco-preto.png', favorite: false, code: 5 },
  ]
},
{
  label: 'shorts',
  products: [
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: true, code: 12 },
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false, code: 13 },
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false, code: 14 },
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false, code: 15 },
    {name: 'Bermuda preta', collection: 'Basic', price: 89.99, image: './src/assets/Shorts/bermuda-lisa-preta.png', favorite: false, code: 16 },
  ]
},
{
  label: 'pants',
  products: [
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, discount: 10, code: 17 },
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 18},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 19},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 20},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 21},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 22},
    {name: 'Calça preta', collection: 'Basic', price: 89.99, image: './src/assets/Pants/calca-preta.png', favorite: true, code: 23}
  ]
},
{
  label: 'shoes',
  products: [
    {name: 'Tênis preto', collection: 'Basic', price: 299.99, image: './src/assets/Shoes/tenis-preto.png', favorite: true, discount: 35, code: 24 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 25 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 26 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 27 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 28 },
    {name: 'Tênis preto', collection: 'Basic', price: 199.99, image: './src/assets/Shoes/tenis-preto.png', favorite: false, code: 29 },
  ]
},
{
  label: 'accessories',
  products: [
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, discount: 10, code: 30 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 31 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 32 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 33 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 34 },
    {name: 'Boné preto', collection: 'Basic', price: 89.99, image: './src/assets/Accessories/bone-preto.png', favorite: true, code: 35 }
  ]
}
]