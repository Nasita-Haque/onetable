import React from 'react';


const Header = React.createClass({
  render() {
    let name = this.props.user[0].firstname
    if(!name) {
      return (
        <div className='header'>
          <h2>ONE TABLE</h2>
        </div>
      )
    } else {
      return (
        <div className='header'>
          <h2>ONE TABLE</h2>
          <h2>Hello {name}!</h2>
        </div>
      )
    }
  }
})

export default Header;
