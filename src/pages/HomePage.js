import * as React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam harum velit quam laboriosam corporis minima voluptatibus quae ea doloribus consequatur minus tempore, tenetur quaerat! Voluptate praesentium impedit qui eius nostrum."
  },
  {
    id: 2,
    title: "Czym jest teoria glosu?",
    author: "Jan Nowak",
    text:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam harum velit quam laboriosam corporis minima voluptatibus quae ea doloribus consequatur minus tempore, tenetur quaerat! Voluptate praesentium impedit qui eius nostrum."
  },
  {
    id: 3,
    title: "Czym jest teoria czegos?",
    author: "Jan Nowak",
    text:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam harum velit quam laboriosam corporis minima voluptatibus quae ea doloribus consequatur minus tempore, tenetur quaerat! Voluptate praesentium impedit qui eius nostrum."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
