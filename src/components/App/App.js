import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
import PropTypes, { func } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { getHouseData } from '../../actions/AppActions';
class App extends Component {

  componentDidMount() {
    this.props.getHouseData();
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: PropTypes.string,
  fakeAction: func.isRequired,
  getHouseData: func
};

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),
  getHouseData: () => dispatch(getHouseData())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
