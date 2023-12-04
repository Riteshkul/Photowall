import React from 'react'
import Photo from './Photo';
import Title from './Title';
import Comments from './Comments';

const Single = (props) => {
    const{match,posts}=props;
    const id=(match.params.id);
    const post=posts.find((post)=>post.id===id)
    console.log('all posts',posts)   
    console.log('single posts',post)
    const comments=props.comments[match.params.id] || []
    const index=props.posts.findIndex((post)=>post.id===id);

     return (
    <div className='single-photo'>
        <Title/>
        {props &&<>             <Photo post={post} {...props} index={index}/>
             <Comments startAddingComment={props.startAddingComment} comments={comments} id={id}/>
             </>

        }
       
    </div>
  )
}

export default Single