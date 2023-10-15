import React, { Component } from "react";
import Navbarr from "../Component/Navbar";
import Cardd from "../Component/Card";
import Footer from '../Component/Footer'

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbarr />
        <Cardd />
        <Footer />
      </>
    );
  }
}
