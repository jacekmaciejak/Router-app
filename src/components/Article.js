import * as React from "react";

const Article = props => {
  const styles = {
    marginTop: "40px",
    lineHeight: 1.7
  };

  return (
    <article style={styles}>
      <h3 style={{ marginBottom: "5px", textTransform: "uppercase" }}>
        {props.title}
      </h3>
      <span
        style={{ display: "block", marginBottom: "10px", fontSize: "14px" }}
      >
        {props.author}
      </span>
      <p style={{ fontSize: "18px" }}>{props.text}</p>
    </article>
  );
};

export default Article;
