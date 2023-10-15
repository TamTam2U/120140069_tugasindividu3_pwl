import React, { Component } from 'react'
import Home from './Pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path = "/" exact component = {Home}/>
      </BrowserRouter>

    )
  }
}
