import React from "react";

function Article({ title, date, preview, minutes }) {
  function minToRead(readTime) {
    let cupNum = 0;
    let bentoNum = 0;
    let returnArr = [];

    if (readTime < 30) {
      cupNum = Math.ceil(readTime / 5);
      while (cupNum > 0) {
        returnArr.push("☕️");
        cupNum -= 1;
      }
    } else {
      bentoNum = Math.ceil(readTime / 10);
      while (bentoNum > 0) {
        returnArr.push("🍱");
        bentoNum -= 1;
      }
    }
    return returnArr;
  }

  return (
    <article>
      <h3>{title}</h3>
      <p>{minToRead(minutes)}</p>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

// Refactored Bonus:

// function minToRead(readTime) {
//     const interval = readTime < 30 ? 5 : 10;
//     const emoji = readTime < 30 ? "☕️" : "🍱";

//     let emojis = "";
//     for (let i = 0; i < readTime; i += interval) {
//       emojis += emoji;
//     }

//     return emojis;
//   }
