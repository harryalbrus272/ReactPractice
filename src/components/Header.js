import React from 'react'
//we don't need this anymore
//const Header = (props) => {
//destructing the props as below    
  const Header = ({title}) => {  
    return (
        <header>
            <h1>Hello in Header { title }</h1>            
        </header>
    )
}

export default Header
