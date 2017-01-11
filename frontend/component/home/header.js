import React from 'react';


const Header = React.createClass({
  render() {
    return (
      <div className='header'>
        <h2>ONE TABLE</h2>
        <h2>Hello {this.props.name}!</h2>
      </div>
    )
  }
})

export default Header;
