import React from "react";
import styled from "styled-components";

const imgStyle = {
  height: "200px",
  width: "200px"
};

const Book = ({ book }) => {
  const { cover, name, isbn, published_at, author } = book;
  return (
    <BookInfo>
      <img src={cover} alt="Book Cover" style={imgStyle} />
      <h3>
        <em>{name}</em>
      </h3>
      <p>Author: {author}</p>
      <p>Published: {published_at}</p>
    </BookInfo>
  );
};

export default Book;

const BookInfo = styled.article`
  margin: 20px;
  text-align: center;
`;
