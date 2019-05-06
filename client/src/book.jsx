import React from 'react';


class Book extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            
            {this.props.bookInfo.title}, {this.props.bookInfo.author}
            <button>up</button>
            <button>down</button>
            
            </div>
        )
    }
}

module.exports = Book;