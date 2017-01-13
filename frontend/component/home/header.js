import React from 'react';

const Header = React.createClass({
  render() {
    let name = this.props.user[0].firstname
    if(!name) {
      return (
        <div className='header'>
          <img className="logo" src="http://i.imgur.com/Dy7Esmv.gif"></img>
          <div className="border"></div>
        </div>
      )
    } else {
      return (
        <div className='header'>
          <img className="logo" src="http://i.imgur.com/Dy7Esmv.gif"></img>
          <div className="border"></div>
          <h2 className='username'>Hi {name}!</h2>
        </div>
      )
    }
  }
})

export default Header;
