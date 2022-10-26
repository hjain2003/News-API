import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newspace extends Component {
  articles= [];

  constructor()
  {
    super();
    console.log("constructor added");
    this.state={
    articles : this.articles,
    }
  }
  async componentDidMount()
  {
    let url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f11243982f08423580e0141b0ab70b1c";
    let data=await fetch(url);
    let ParsedData=await data.json();
    this.setState({
      articles:ParsedData.articles
    })
  }

  render() {
    return (
    <>
    <div className="newsheading"><h1>Top Headlines</h1></div><br/>
      <div className="row">
        {this.state.articles.map((element)=>{
          return ( 
        <div className="col-md-4">
        <Newsitem title={element.title} desc={element.description.slice(0,88)+"..."} url={element.urlToImage} readmore={element.url}/><br/>
        </div>
          )
        })}
      </div>
    </>
    )
  }
}
