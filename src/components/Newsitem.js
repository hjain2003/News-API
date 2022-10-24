import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let { title, desc } = this.props;
    return (
        <div className="container">
          <div className="square">
            <img src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80" className="mask"/>
              <div className="h1">{title}</div>
              <p>desc</p>
              <div><a href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261" target="_" className="button">Read More</a></div>
          </div>
        </div>
    )
  }
}
