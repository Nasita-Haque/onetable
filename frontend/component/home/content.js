import React from 'react';


const Content = React.createClass({
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>FEATURED NEW YORK RESTAURANTS</h1>
        <div className='content'>
          <ul className='images'>
            {this.props.allRestaurants}
          </ul>
        </div>
      </div>
    )
  }
})

export default Content;
