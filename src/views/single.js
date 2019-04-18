import React from "react";
import styled from "styled-components";
import Book from "../components/book";

const Single = ({ match, location }) => {
  const { book } = location.state;
  console.log(match.params.id);
  return (
    <SingleBook>
      <Book book={book} />
    </SingleBook>
  );
};

export default Single;

const SingleBook = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
