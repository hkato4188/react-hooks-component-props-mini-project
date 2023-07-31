import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  let articles = posts.map((article) => {
    return (
      <Article
        key={article.id}
        date={article.date || "January 1, 1970"}
        minutes={article.minutes}
        preview={article.preview}
        title={article.title}
      />
    );
  });

  return <main>{articles}</main>;
}

export default ArticleList;
