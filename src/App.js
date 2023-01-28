import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined } from '@ant-design/icons';
import { Navbar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails, ScrollToTop } from './components';
import './App.css'
import NotFoundPage from './components/NotFoundPage';


function App() {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />

            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <ScrollToTop />
                        <Switch>
                            <Route exact path='/'>
                                <HomePage />
                            </Route>
                            <Route exact path='/exchanges'>
                                <Exchanges className='exchange-body' />
                            </Route>
                            <Route exact path='/cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path='/crypto/:coinId'>
                                <CryptoDetails />
                            </Route>
                            <Route exact path='/news'>
                                <News />
                            </Route>
                            <Route exact path='*'>
                                <NotFoundPage />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: "white", textAlign: 'center' }}>
                        KryptoMania <br />
                        © Saksham Kaushik {new Date().getFullYear()}
                    </Typography.Title>
                    <Space>
                        <Link to="/" className='nav-link'>[ <HomeOutlined /> | </Link>
                        <Link to="/exchanges" className='nav-link'><MoneyCollectOutlined /> | </Link>
                        <Link to="/news" className='nav-link'><BulbOutlined /> ]</Link>
                    </Space>
                </div>
            </div>

        </div>
    );
}

export default App
