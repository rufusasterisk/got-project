import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
import PropTypes, { func } from 'prop-types';
import logo from './logo.svg';
import loading from './wolf.gif';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { getHouseData } from '../../actions/AppActions';
import { CardContainer } from '../CardContainer/CardContainer';

class App extends Component {

  componentDidMount() {
    this.props.getHouseData();
  }

  conditionalRender() {
    if ( this.props.houseData.length === 0 ) {
      return (
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to </h2>
          </div>
          <div className='Display-info'>
            <img id='wolf' src={loading} className='loading-gif' alt='loading' />
          </div>
        </div>);
    } else {
      return (
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to Westeros</h2>
          </div>
          <div className='Display-info'>
            <CardContainer houseArray={this.props.houseData}/>
          </div>
        </div>
      );
    }
  }

  render() {
    return this.conditionalRender();
  }
}

App.propTypes = {
  fake: PropTypes.string,
  fakeAction: func.isRequired,
  getHouseData: func,
  houseData: PropTypes.array
};

const mapStateToProps = ({ fake, houseData }) => ({ fake, houseData });
const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),
  getHouseData: () => dispatch(getHouseData())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
