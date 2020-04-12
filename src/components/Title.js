import React from 'react';
import styled from 'styled-components';

export default function Title(props) {
    const {title,width}=props;
    return (
      
            <div className="title">
            <h2>{title}</h2>
            <div className="underline" style={{width:width}} ></div>
        </div>
      
    )
}




