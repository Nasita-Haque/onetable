import React from 'react';
import $ from 'jQuery';
import Navbar from '../navbar/Navbar.jsx';

const App = React.createClass({
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/auth'
    })
    .done((username) => {
      if(username) {
        console.log(username + ' is logged in!');
        this.setState({username: username});
      } else {
        console.log('No on is logged in');
      }
    })
  },
  render() {
    return (
      <div>
        <Navbar items={[{text: 'Home', url: '/'}, {text: 'Login', url: '/login'}]} />
        {this.props.children}
      </div>
    )
  }
});

export default App;
