import React from 'react';
import IndexRouter from './router';
import { Layout } from 'antd';
import Header from './component/header';
import './static/css/index.css';
import Container from './component/container';

function App() {
  return <Layout className='pageLayout'>
    <Header />
    <Container style={{
      "paddingTop":74
    }}>
      <IndexRouter />
    </Container>
  </Layout>
}

export default App;
