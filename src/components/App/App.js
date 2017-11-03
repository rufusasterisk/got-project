import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
import PropTypes, { func } from 'prop-types';
import logo from './logo.svg';
import loading from './wolf.gif';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { getHouseData, toggleMemberDisplay } from '../../actions/AppActions';
import { CardContainer } from '../CardContainer/CardContainer';

class App extends Component {

  componentDidMount() {
    this.props.getHouseData();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
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
            <CardContainer
              houseArray={this.props.houseData}
              toggleFunction={this.props.toggleMemberDisplay}
              addClick={this.props.fetchSuccess} />
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
  getHouseData: func,
  houseData: PropTypes.array,
  toggleMemberDisplay: PropTypes.func,
  fetchSuccess: PropTypes.bool
};

const mapStateToProps = ({ houseData, fetchSuccess }) => ({  houseData, fetchSuccess });
const mapDispatchToProps = dispatch => ({
  fakeAction: () => dispatch(fakeAction()),
  getHouseData: () => dispatch(getHouseData()),
  toggleMemberDisplay: (houseName, status) => dispatch(toggleMemberDisplay(houseName, status))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
