import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from './components/Shared/Layout';
import Container from './components/Shared/Container';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ContentWrapper from './components/Shared/ContentWrapper';
import Basket from './components/Basket';
import Filters from './components/Filters';
import { getItems } from './redux/ducks/items';
import { getCompanies } from './redux/ducks/company';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <Container flex between>
          <Filters />
          {/* <ProductList /> */}
          {/* <Basket /> */}
        </Container>
      </ContentWrapper>
      <Footer />
    </Layout>
  );
}

export default App;
