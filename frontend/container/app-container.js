import App from '../component/app/app';
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
      user: state.logInReducer
    })



export default connect(mapStateToProps)(App);
