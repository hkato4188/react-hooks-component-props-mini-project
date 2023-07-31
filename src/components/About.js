import React from "react";

function About({ about, image }) {
  return (
    <aside>
      <img src={image} alt="blog-logo"></img>
      <p>{about}</p>
    </aside>
  );
}

export default About;
