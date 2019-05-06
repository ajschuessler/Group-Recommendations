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
            <p className={this.props.bookInfo.title}>
            
                <div>{this.props.bookInfo.title}</div> 
                
                <div>{this.props.bookInfo.author}</div>
                
                <a href={this.props.bookInfo.link}>Click For Link</a>
                
                <div>
                    <button id={this.props.bookInfo.title} className={this.props.bookInfo.upvotes} onClick={(e) => this.updateVoteCount(e)}>{`^`}</button>
                </div>
                
                <div id={this.props.bookInfo.title + 'upvotes'}>{this.props.bookInfo.upvotes}</div>
            
            </p>
        )
    }
}

module.exports = Book;