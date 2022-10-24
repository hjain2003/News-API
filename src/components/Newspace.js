import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newspace extends Component {
  render() {
    return (
    <>
      <Newsitem title="newheading" desc="newsdescription"/><br/>
      <Newsitem/><br/>
    </>
    )
  }
}
