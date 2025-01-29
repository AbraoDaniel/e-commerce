/* eslint-disable @typescript-eslint/no-explicit-any */
import CoatsPage from "../../components/CoatsPage ";
import CommerceHome from "../../components/CommerceHome";
import ShortsPage from "../../components/ShortsPage";
import ShowProductPage from "../../components/ShowProductPage";
import TshirtsPage from "../../components/TshirtsPage";

export const routePathsAndElements: any = [
  {path: '/', element: <CommerceHome />},
  {path: '/tshirts', element: <TshirtsPage />},
  {path: '/shorts', element: <ShortsPage />},
  {path: '/coats', element: <CoatsPage />},
  {path: '/products/:product_name', element: <ShowProductPage />}
]