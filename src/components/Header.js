import PropTypes from 'prop-types';
import Button from "./Button";
//import React from 'react'
//we don't need this anymore
//const Header = (props) => {
//destructing the props as below    
  const Header = ({title}) => { 
      const onClick = () =>{
          console.log('Click');
      } 
    return (
        <header className="header">
            <h1 style={{color:'red', backgroundColor:'blue'}}>Hello in Header { title }</h1>
            <h2 style= { HeadingStyle }>Second line in header{  }</h2>
            <Button color='green' text='Hello' onClick = { onClick }/>
        </header>
    )
}
Header.defaultProps ={
    title: 'Default Props',
}

Header.propTypes = {
    //more robust code. Eroor if number is entered
    title: PropTypes.string.isRequired,
}
const HeadingStyle= {
    color:'red',
    backgroundColor:'blue',
}
export default Header
