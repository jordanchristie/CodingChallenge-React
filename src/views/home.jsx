import React from "react";
import BookList from "../components/bookList";
import "sanitize.css";
import "./home.css";

const HomeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Home = () => (
  <div style={HomeStyle}>
    <BookList />
  </div>
);

export default Home;
