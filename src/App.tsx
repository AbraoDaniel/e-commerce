import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { Layout } from 'antd';
import CommerceHeader from './components/CommerceHeader';
import AppRoutes from './AppRoutes';
import './i18n'
import { CartContentProvider } from './contexts/CartContext.tsx';

const { Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <CartContentProvider>
        <Layout style={{width: '100%', minHeight:'100vh' }}>
          <CommerceHeader />
          <AppRoutes />
          <Footer style={{ textAlign: 'center' }}>
            Danti ©{new Date().getFullYear()} Created by Daniel A. Abrão
          </Footer>
        </Layout>
      </CartContentProvider>
    </Router>
  );
};

export default App;