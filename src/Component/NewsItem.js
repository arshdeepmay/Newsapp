import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} =this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "20rem"}}>
            <img src={imageUrl?imageUrl:"https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"} className="card-img-top" alt="..." style={{height:'180px'}}/>
            <div className="card-body">
            <h5 className="card-title">{title}  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style= { {left : '90%' , zIndex:'1'} }>
    {source}
    
  </span> </h5>
              <p className="card-text">{description}</p>
              <p class="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
              

             </div>
        </div>
      </div>
    )
  }
}
