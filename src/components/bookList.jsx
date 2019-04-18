import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Book from "./book";
import database from "../../db.json";

class BookList extends Component {
  constructor() {
    super();
    this.state = { books: [] };
  }
  async componentDidMount() {
    const res = await axios.get(
      "https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books"
    );
    const data = await res.data;
    this.setState({ books: data });
  }

  render() {
    const { books } = this.state;
    return (
      <List>
        {books.map(book => (
          <Link
            to={{ pathname: `/book/${book.book_id}`, state: { book } }}
            key={book.book_id}
          >
            <Book book={book} />
          </Link>
        ))}
      </List>
    );
  }
}

export default BookList;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;
