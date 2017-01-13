import React from 'react';


const Header = React.createClass({
  render() {
    return (
      <div className='header'>
        <img className="logo" src="http://i.imgur.com/Dy7Esmv.gif"></img>
        <div className="border"></div>
        <h2 className='username'>Hello Name!</h2>
      </div>
    )
  }
})

export default Header;
