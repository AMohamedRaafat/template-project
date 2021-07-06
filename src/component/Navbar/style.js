import styled from 'styled-components'

export const Navbar = styled.div`
    width: 100%;
    display: flex;
    margin:auto;
    align-items: center;
    text-align: center;
    height: 100px;

`
export const Logo = styled.div`
    
`
export const LogoText = styled.h2`
    font-size:35px;
`
export const UlList = styled.ul`
    list-style-type: none;    
    padding: 10px 15px;
    margin: 0 auto;
    width: 60%;
    margin-right:0;
    text-align: center;
`
export const ListItem = styled.li`
    display: inline-block;   
`
export const Anchor = styled.a `
    font-weight: bold;
    color: #333;    
    padding: 10px;
    margin-right: 10px;
    text-decoration: none;
    &.active { 
        color:#fff;
        background-color:#eb5424;
    }
   
    `
