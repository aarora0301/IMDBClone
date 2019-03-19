import  React from 'react';
import './Movie.css';

const movie=(props)=>(
  <article className="Movie" onClick={props.clicked}>
    <h1>{props.title}</h1>
  </article>
);

export default  movie;
