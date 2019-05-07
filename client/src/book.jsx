import React from 'react';
import Axios from 'axios';
import StarRatings from 'react-star-ratings';


class Book extends React.Component {
    constructor(props) {
        super(props);

        this.updateVoteCount = this.updateVoteCount.bind(this);
        this.convertEmbedTagToEmbedUrl = this.convertEmbedTagToEmbedUrl.bind(this);
    }

    updateVoteCount(e) {
        
        let newCount = {
            title: e.target.id,
            newUpvotes: this.props.bookInfo.upvotes + 1
        }

        

        Axios.put('http://localhost:3000/updateVoteCount', newCount)
        .then(res => {
            console.log(res);
        })
        .then(() => this.props.getAllBooks())
        .catch(err => {
            console.log(err);
        })
    }

    convertEmbedTagToEmbedUrl(url) {

        let startIndex;
        let endIndex;
        let countQuotes;
        let numberQuotes = 0;
    
        for (var i = 0; i < url.length; i++) {
            if (url[i] + url[i+1] + url[i+2] === 'src') {
                countQuotes = 'yes';
            }
            if (countQuotes === 'yes' && url[i] === '"') {
                numberQuotes += 1;
                if (startIndex === undefined) {
                    startIndex = i + 1;
                }
            }
            if (numberQuotes === 2) {
                endIndex = i;
                break;
            }
        }
    
        return url.slice(startIndex, endIndex);
    }

    render() {

        if (this.props.bookInfo.contentType === 'youtubeSelect' && this.props.bookInfo.youtubeEmbedTag !== undefined) {
            return (
                <iframe width="859" height="483" src={this.convertEmbedTagToEmbedUrl(this.props.bookInfo.youtubeEmbedTag)} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )

        } else {
            return (
                <div className='bookListing'>
                
                    <img className='bookImage' src={this.props.bookInfo.imageUrl}></img> 
                    
                    <div>{this.props.bookInfo.title}</div> 
                    
                    <div className='author'>{this.props.bookInfo.author}</div>
                    
                    <a href={this.props.bookInfo.purchaseUrl}>Click Here To View</a>

                    <div>
                        <StarRatings
                            rating={this.props.bookInfo.rating}
                            starRatedColor="gold"
                            changeRating={this.changeRating}
                            numberOfStars={10}
                            name='rating'
                            starDimension="20px"
                        />
                    </div>
                
                </div>
            )
        }
    }
}

module.exports = Book;