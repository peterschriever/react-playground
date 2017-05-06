import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
// make sure the selectBook return flows through all the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.books.map((book, index) => {
            return (
                <li onClick={ () => this.props.selectBook(book) }
                    key={index}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
}

// this function is the glue between React and Redux
function mapStateToProps(state) {
    // whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books // map this.props.books to state.books
    };
}

// anything returned from this function will end up as props
// on the BookList container (we can now call this.props.selectBook in BookList)
function mapDispatchToProps(dispatch) {
    // whenever selectBook() is called, the result should  be passed
    // to all reducers.
    // the dispatch() function takes the result of selectBook() and makes it flow through
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes a function and a Component, and returns a container (smart component)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
