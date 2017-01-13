import React from 'react';


const Content = React.createClass({
  render() {
    console.log(this.props)
    return (
      <div>
        <center><h1>FEATURED NEW YORK RESTAURANTS</h1></center>
        <div className='content'>
          <div className='images'>
            {this.props.allRestaurants}
          </div>
        </div>
      </div>
    )
  }
})

export default Content;
