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
    page:1,
    }
  }
  async componentDidMount()
  {
    let url=`https://newsapi.org/v2/top-headlines?q=apple&from=2022-10-25&to=2022-10-25&sortBy=popularity&apiKey=f11243982f08423580e0141b0ab70b1c&pageSize=6&page=${this.page}`;
    let data=await fetch(url);
    let ParsedData=await data.json();
    this.setState({
      articles:ParsedData.articles
    })
  }

   prevpage=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?q=apple&from=2022-10-25&to=2022-10-25&sortBy=popularity&apiKey=f11243982f08423580e0141b0ab70b1c&pageSize=6&page=${this.state.page-1}`;
    let data=await fetch(url);
    let ParsedData=await data.json();
    this.setState({
      articles:ParsedData.articles,
      page : this.state.page-1
    })
    console.log("previous")
  }
  nextpage=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?q=apple&from=2022-10-25&to=2022-10-25&sortBy=popularity&apiKey=f11243982f08423580e0141b0ab70b1c&pageSize=6&page=${this.state.page+1}`;
    let data=await fetch(url);
    let ParsedData=await data.json();
    this.setState({
      articles:ParsedData.articles,
      page : this.state.page+1
    })
    console.log("previous")
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

      <div className="buttons">
      <button className="button-3" role="button" onClick={this.prevpage}>Prev</button>
      <button className="button-3" role="button" onClick={this.nextpage}>Next</button>
      </div>
    </>
    )
  }
}
