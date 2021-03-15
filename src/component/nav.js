import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export default function Nav(props){
    const location = useLocation();
    const {navs,getSelected,theme} = props;
    const selectedKey = getSelected(location);
    // const {pathname} = useLocation();
    // const selectedKey = navs.findIndex(item=>{
    //     return item.to == pathname;
    // })
    return <Menu
            mode={"horizontal"}
            theme={theme}
            defaultSelectedKeys={[selectedKey+'']}
        >
        {navs.map((item,index)=>{
            return <Menu.Item key={index}>
                <Link to={item.to}>{item.title}</Link>
            </Menu.Item>
        })}
    </Menu>
}