import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'

export default class News extends Component {
  static defaultProps={
    country:"in",
    pageSize :9,
    category:"general"
  }
  static propTypes={
    country:propTypes.string,
    pageSize:propTypes.number,
    category:propTypes.string
  }
 
  constructor(props){
    super(props);
    this.state ={
      articles: [],
      loading : false,
      page:1
    }
    document.title= `News Monkey - ${this.props.category.toUpperCase()}`
  }
  async updateNews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=271126b49b7c45ddaca3ee43f3937987&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData=await data.json()
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
  }
  async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=271126b49b7c45ddaca3ee43f3937987&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data= await fetch(url);
    // let parsedData=await data.json()
    // this.setState({
    //   articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // })
    this.updateNews()
  }
  onclickPrev = async() =>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=271126b49b7c45ddaca3ee43f3937987&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data= await fetch(url);
    // let parsedData=await data.json()
    // this.setState({
    //   page:this.state.page-1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
    this.setState({
      page:this.state.page-1,
    })
    this.updateNews()
  }
  onclickNext = async() =>{
    // if(this.state.page+1 <= Math.ceil(this.state.totalResults/20)){
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=271126b49b7c45ddaca3ee43f3937987&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    // let data= await fetch(url);
    // let parsedData=await data.json()
    // this.setState({
    //   page:this.state.page+1,
    //   articles:parsedData.articles,
    //   loading:false
    // })
    this.setState({
      page:this.state.page+1,
    })
    this.updateNews()
    //  }
    
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News Monkey - Top {this.props.category.charAt(0).toUpperCase() +  this.props.category.slice(1)} Headlines hai</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45)+"...":""} description={element.description?element.description.slice(0,88)+"...":""} imageUrl={element.urlToImage} newsUrl={element.url}
            author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
            
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-link" onClick={this.onclickPrev}>&larr; Prev</button>

          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-link" onClick={this.onclickNext}>Next &rarr;</button>
          </div>
      </div>
      
    )
  }
}
