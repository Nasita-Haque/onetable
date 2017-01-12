import React from 'react';
import Header from './header';
import Content from './content'
import Footer from './footer';

const Home = React.createClass({
  componentDidMount() {
    this.props.action()
  },
  displayRestaurants() {
    const {restaurants} = this.props
    return restaurants.map((restaurant, idx) => {
      return (<button key={idx} id={restaurant.id} onClick={this.handleClick}>{restaurant.name}</button>)
    })
    console.log('display', allRestaurants)
  },
  handleClick(e){
    this.props.goto(`/opentable/${e.target.id}`)
  },
  render() {
    console.log(this.props.params)
    return (
      <div className='home'>
        <Header />
        <Content allRestaurants={this.displayRestaurants()}/>
        <Footer />
      </div>
    )
  }
})

export default Home;
