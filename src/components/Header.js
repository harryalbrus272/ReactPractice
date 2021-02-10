import PropTypes from 'prop-types';
import Button from "./Button";
//import React from 'react'
//we don't need this anymore
//const Header = (props) => {
//destructing the props as below    
  const Header = ({title, onAdd, showAdd}) => { 
    //   const onClick = () =>{
    //       console.log('Click');
    //   } 
    return (
        <header className="header">
            <h1>Task Manager { title }</h1>
            {/* <h2 style= { HeadingStyle }>Second line in header{  }</h2> */}
            <Button color={showAdd ? 'red' :'green'} text={ showAdd ? 'Close' : 'Add'} onClick = { onAdd }/>
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
// const HeadingStyle= {
//     color:'red',
//     backgroundColor:'blue',
// }
export default Header
