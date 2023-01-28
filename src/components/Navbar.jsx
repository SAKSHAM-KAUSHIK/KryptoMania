import React, { useEffect, useState } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { BgColorsOutlined } from '@ant-design/icons'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from "../images/crypto.png";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 805) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const [theme, setTheme] = useState("Green-Theme");
    
    const toggleTheme= () => {
        setTheme(theme === "Green-Theme" ? "Purple-Theme" : "Green-Theme");
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (
        <div className="nav-container">
            <div className='logo-container'>
                <Avatar src={icon} size={55} />
                <Typography.Title level={2} className="logo">
                    <Link to="/">KryptoMania</Link>
                </Typography.Title>
            </div>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>
            
            {activeMenu && (
                <div>
                <Menu theme='dark' className='navbar-options' >
                    <Menu.Item  icon={<HomeOutlined /> }>
                        <Link className='nav-link' to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link className='nav-link' to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link className='nav-link' to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link className='nav-link' to="/news">News</Link>
                        </Menu.Item>
                        <Menu.Item>
                        <Button className='theme-button' onClick={() => toggleTheme()}><BgColorsOutlined />Theme</Button>
                        </Menu.Item>
                </Menu>
                </div>
            )}
        </div>
    )
}

export default Navbar
