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