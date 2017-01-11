import React from 'react';
import Header from './header';
import Content from './content'
import Footer from './footer';
import '../../container/restaurants-container'

const Home = React.createClass({
  render() {
    console.log(this.props.restaurants)
    return (
      <div className='home'>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
})

export default Home;
