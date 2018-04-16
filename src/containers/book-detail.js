import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // Return early if this.props.book is null, as it is when the app
    // boots up.
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    // Once they click on a book, the application state will be updated
    // and the container will re-render.
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
