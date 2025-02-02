import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { Layout } from 'antd';
import CommerceHeader from './components/CommerceHeader';
import AppRoutes from './AppRoutes';
import './i18n'
import { CartContentProvider } from './contexts/CartContext.tsx';
import { ProductsProvider } from './contexts/ProductsContext.tsx/index.tsx';

const { Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <ProductsProvider>
        <CartContentProvider>
          <Layout style={{display: 'flex', flexDirection: 'column', width: '100%', minHeight:'100vh', background: 'white' }}>
            <CommerceHeader />
            <Content style={{flex: 1 }}>
              <AppRoutes />
            </Content>
            <Footer style={{ textAlign: 'center', marginTop: 100}}>
              Danti ©{new Date().getFullYear()} Created by Daniel A. Abrão
            </Footer>
          </Layout>
        </CartContentProvider>
      </ProductsProvider>
    </Router>
  );
};

export default App;