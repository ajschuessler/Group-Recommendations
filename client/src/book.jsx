import React from 'react';
import Axios from 'axios';


class Book extends React.Component {
    constructor(props) {
        super(props);

        this.updateVoteCount = this.updateVoteCount.bind(this);
    }

    updateVoteCount(e) {
        
        let newCount = {
            title: e.target.id,
            newUpvotes: Number(document.getElementById(e.target.id + 'upvotes').textContent) + 1
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

    render() {

        return (
            <div className='bookListing'>
            
                <div>{this.props.bookInfo.title}</div> 
                
                <div className='author'>by {this.props.bookInfo.author}</div>
                
                <a href={this.props.bookInfo.purchaseUrl}>Buy On Amazon</a>
                
                <div>
                    <button id={this.props.bookInfo.title} className='upvoteButton' onClick={(e) => this.updateVoteCount(e)}>👍</button>
                </div>
                
                <div id={this.props.bookInfo.title + 'upvotes'}>{this.props.bookInfo.upvotes}</div>
            
            </div>
        )
    }
}

module.exports = Book;