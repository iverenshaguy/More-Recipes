import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import Navbar from '../Navbar';

/**
 * @exports Header
 * @class Header
 * @return {Component} Header
 */
class Header extends Component {
  /**
   * @memberof Header
   * @constructor
   * @returns {Component} Logged out User
   */
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  /**
   * @memberof Header
   * @returns {Component} Logged out User
   */
  logout() {
    this.props.dispatch(logout());
  }

  /**
   * @memberof Header
   * @returns {Component} Header
   */
  render() {
    return (
      <header>
        <Navbar
          isAuthenticated={this.props.isAuthenticated}
          type={this.props.currentLocation}
          logout={this.logout}
          user={this.props.user}
        />
      </header>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentLocation: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.any //eslint-disable-line
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  currentLocation: state.location.current,
  user: state.auth.user
});

export { Header as HeaderComponent };

export default connect(mapStateToProps)(Header);
