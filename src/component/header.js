import React from 'react';
// import { Affix, Layout } from 'antd';
import { Col, Layout, Row } from 'antd';
// import Container from './container';
import { Link } from 'react-router-dom';
import Nav from './nav';
import { navs } from '../router/router_list';

export default function Header() {
    return <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className='wrap'>
            {/* <Container> */}
                <Row>
                    <Col 
                        xs={6}
                        sm={4}
                        md={2}
                    >
                        <h1 id="logo">
                            <Link to="/">CNode</Link>
                        </h1>
                    </Col>
                    <Col 
                        xs={18}
                        sm={20}
                        md={22}
                    >
                        <Nav
                            navs={navs}
                            getSelected={(location) => {
                                const { pathname } = location;
                                return navs.findIndex(item => {
                                    return item.to === pathname;
                                })
                            }}
                            theme="dark"
                        ></Nav>
                    </Col>
                </Row>
            {/* </Container> */}
        </div>

    </Layout.Header>
    // return <Affix offsetTop={0}>  固钉

    // </Affix>
}