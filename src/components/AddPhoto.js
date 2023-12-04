import React from 'react'
const AddPhoto = (props) => {
  const handleSubmit=(event)=>{
        event.preventDefault();
       const imageLink=event.target.elements.link.value;
      const description=event.target.elements.description.value;
      const post={
        id:'0',
        description:description,
        url:imageLink
      }
      if(description && imageLink){
        props.startAddingPost(post);
        props.onHistory.push('/')
      }
      
  }
  return (
    <div>
      <h1>Photowall</h1>
      <div className='form'>      
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Link' name='link'></input>
        <input type="text" placeholder='Description' name='description'></input>
        <button>Post</button>
      </form>
      </div>

    </div>
  )
}

export default AddPhoto