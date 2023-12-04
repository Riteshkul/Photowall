import React from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'
import LoadingSpinnerrafce from './Loadingspinner';
const PhotoWall = (props) => {
  if (!props) {
    return <LoadingSpinnerrafce/>; // or handle the case when post is undefined
  }
  return (
    <div>
    <Link className='addIcon'  to="/AddPhoto">Add New Post</Link>
    <div className='photoGrid'>
        {props.posts.map((post,index) => (
        <Photo key={post.index} post={post} {...props} index={index}/>
      ))}
    </div>
    </div>
  )
}

export default PhotoWall