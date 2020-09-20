import React from 'react';
import './Publication.css';
import LikeIcon from './LikeIcon';
import CommentIcon from './CommentIcon';
import ActiveIcon from './ActiveIcon';
import {randomNumberFunc} from "../utils";

const randomLikeCounter = randomNumberFunc();
const randomCommentCounter = randomNumberFunc();

function Publication(props) {
  return (
<div className  ="publication-container">
      <div className = "publication-body">
        <header className="publication-header">
        <img src={props.author.photo} alt="author-img" className = "author-publication-img" />
          <h3 className = "author-name">{props.author.name}</h3>
          {props.author.isActive && <ActiveIcon className = "active-icon"/>}  
          <span className = "publication-date"> {props.date}</span>
        </header>
        <main className = "publication-content">
          <p className = "publication-text">
              {props.content}
          </p>
          <a href={props.link}>
          <img src={props.image} alt="publication img"className = "publication-img" />
          </a>
        </main>
        <footer className="publication-footer">
          <div className="like">
          <LikeIcon className ="like-icon"/>
  <span className = "like-counter">{randomLikeCounter}</span>
          </div>
          <div className="comment">
          <CommentIcon className ="comment-icon"/>
  <span className = "comment-counter">{randomCommentCounter}</span>
          </div>
        </footer>
      </div>      
    </div>
  );
}

export default Publication;
