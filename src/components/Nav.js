import React , { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/slice1.svg'
import Collection from './Exchange'

const Nav = () => {

    
    return (
        <NavStyle>
            <div className="logo">
                    <img src={logo} alt = "logo"></img>
                </div>
            <ul>
                
                <li >Collections</li>
                <li>Designs</li>
            </ul>      
        </NavStyle>
    )
}

const NavStyle = styled.div`
    display:flex;
    align-items:center;
    min-height:5vh;
    ul{
        display:flex;
        align-items:center;
        justify-content:space-between;
        list-style:none;
        padding:1rem 1rem;
    }
    li {
        flex:1;
        align-items:center;
        justify-content:space-around;
        margin-left:3rem;
        border-bottom:1px solid #FF00CB;
        cursor:pointer;
    }
    .logo{
        font-size:2rem;
        font-weight:800;
    }
    img{
        width:3.5rem;
        margin-left:2rem;
    }
    

`

export default Nav
