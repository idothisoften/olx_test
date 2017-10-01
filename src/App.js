import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';

import Cards from './containers/Cards';
import Pager from './containers/Pager';

import { connect } from 'react-redux'

import { loadPage } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.loadPage();
  }

  render() {
    return (
      <div className={style.page}>
        <div className={style.header}>
          <div className={style.logo}>
            <img src={logo} className={style.AppLogo} alt="logo" />
          </div>
        </div>

        <div className={style.content}>
          <Cards />
          <div className={style.pagerWrap}>
            <Pager />
          </div>
        </div>

        <div className={style.footer}>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => state,
  { loadPage }
)(App);
