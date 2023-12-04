import React from 'react'
import { Link } from 'react-router-dom';


const Photo = (props) => {
    const post=props.post;
  
  return (
    <figure className='figure'>
      <Link to={`/single/${post.id}`}><img className='photo' src={post.url} alt={post.description}/></Link>
        <figcaption><p>{post.description}</p></figcaption>
        <div className='button-container'>
        <button  onClick={()=>{
          props.startRemovingPosts(props.index,post.id);
          props.history.push('/')
        }}>Remove</button>
        <Link className='comment-button' to={`/single/${post.id}`}>
        <div className='comment-count'>
            <div className='speech-bubble'></div>
            {props.comments[post.id]?props.comments[post.id].length:0}
        </div>
        </Link>
        </div>
    </figure>
  )
}

export default Photo