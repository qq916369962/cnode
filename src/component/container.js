import React from 'react';

export default function Container(props){
    let {style=null,children} = props
    return <div className="container" style={style}>
        {props.children}
    </div>
}