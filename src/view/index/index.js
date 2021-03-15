import React, { Fragment } from 'react';
import Nav from '../../component/nav';
import { indexNavs } from '../../router/router_list';
import qs from 'qs';
import IndexList from './list';

export default function IndexPage(){
    return <div className="main">
        <Nav 
            navs={indexNavs}
            getSelected = {(location)=>{
                let {search} = location;
                let {tab:nowTab='all'} =  qs.parse(search);
                return indexNavs.findIndex(item=>{
                    let {tab} = qs.parse(item.to.slice(2));
                    return nowTab === tab;
                })
            }}
        ></Nav>
        <IndexList/>
    </div>
}