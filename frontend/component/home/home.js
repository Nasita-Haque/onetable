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

    // let output = [];
    // for(var i = 0; i < 6; i++) {
    //   output.push(`<li key=${i} id=${restaurants[i].id} onClick=${this.handleClick}>${restaurants[i].img_url}</li>`)
    // }
    // return output
    return restaurants.map((restaurant, idx) => {
      if(idx < 8) {
        return (
          <div>
            <img key={idx} className={restaurant.name} id={restaurant.id} src={restaurant.img_url} onClick={this.handleClick} />
            <span>{restaurant.name}</span>
          </div>
        )
      }
    })
    // console.log('display', allRestaurants)
  },
  handleClick(e){
    this.props.goto(`/opentable/${e.target.id}`)
  },
  render() {
    // console.log(this.props.params)
    // this.props.restaurants ? console.log(this.props.restaurants[0].name) : null
    return (
      <div className='home'>
        <Content allRestaurants={this.displayRestaurants()}/>
        {/* <Footer /> */}
      </div>
    )
  }
})

export default Home;
