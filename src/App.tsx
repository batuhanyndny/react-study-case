import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from './redux/ducks/item';
import Container from './components/Shared/Container';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ContentWrapper from './components/Shared/ContentWrapper';
import { Layout } from './components/Shared/Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <Container flex between>
          Filters here
          <ProductList />
          Basket Here
        </Container>
      </ContentWrapper>
    </Layout>
  );
}

export default App;
