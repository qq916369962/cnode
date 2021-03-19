import React from 'react';
import IndexRouter from './router';
import { Layout } from 'antd';
import Header from './component/header';
// import Container from './component/container';
import Footer from './component/footer';
import './static/css/index.css';

function App() {
  return <Layout className='pageLayout'>
    <Header />
    {/* <Container style={{
        "paddingTop": 74
      }}> */}
    <Layout.Content style={{
        "paddingTop": 74
      }}>
      <div className="wrap">
        <IndexRouter />
      </div>
    </Layout.Content>
    {/* </Container> */}
    <Footer />
  </Layout>
}

export default App;
