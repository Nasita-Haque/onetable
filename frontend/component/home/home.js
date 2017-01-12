import React from 'react';
import Header from './header';
import Content from './content'
import Footer from './footer';

const Home = React.createClass({
  componentDidMount() {
    console.log(this.props.action())
  },
  render() {
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
