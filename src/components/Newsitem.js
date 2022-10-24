import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let { title, desc,url,readmore } = this.props;
    return (
        <div className="container">
          <div className="square">
            <img src={url} className="mask"/>
              <div className="h1">{title}</div>
              <p>{desc}</p>
              <div><a href={readmore} target="_" className="button">Read More</a></div>
          </div>
        </div>
    )
  }
}
