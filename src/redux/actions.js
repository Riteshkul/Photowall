import posts from "../data/posts";
import { database,ref,push,set,get} from "../database/config"
import { update } from "firebase/database";
export function startAddingPost(post){
    return(dispatch)=>{
        const postsRef = ref(database, 'posts');
        const newPostRef = push(postsRef); // Create a new child reference with a unique key
        const postId = newPostRef.key;
    
        // Set the data for the new post under the unique key
        return set(newPostRef, { ...post, id: postId }).then(() => {
          dispatch(addPost({ ...post, id: postId })); // Dispatch the action with the new post including the generated ID
        });
    }
}

export function startLoadingPost() {
    return (dispatch) => {
      const postsRef = ref(database, 'posts');
      return get(postsRef).then((snapshot) => {
        let posts = [];
        console.log('snapshot',snapshot)
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPosts(posts));
        console.log('Posts in Redux Store:', posts)
      });
    };
  }
export function startAddingComment(comment,postId){
    return (dispatch)=>{
        const postsRef = ref(database, 'comments/'+postId);
            return push(postsRef,comment).then(()=>{
                dispatch(addComment(comment,postId))
            })
    }
}
export function startLodingComments(){
    return (dispatch)=>{
        const postsRef = ref(database, 'comments');
      return get(postsRef).then((snapshot) => {
        let comments = [];
        console.log('snapshot',snapshot)
        snapshot.forEach((childSnapshot) => {
            comments[childSnapshot.key()]=Object.values(childSnapshot.val())
        });
        dispatch(loadComments(comments));
        console.log('Posts in Redux Store:', posts)
      });
    }
}

export function loadComments(comments){
    return {
        type:'LOAD_COMMENTS',
        comments
    }
}
export const startRemovingPosts = (index, id) => {
    return (dispatch) => {
      const postsRef = ref(database, `posts/${id}`);
      
      // Set the data to null to delete the post at the specified reference
      return set(postsRef, null).then(() => {
        dispatch(removePost(index));
      });
    };
  };
export const removePost=(index)=>{
    return {
        type:'REMOVE_POST',
        index
    }


}

export const addPost=(post)=>{
    return{
        type:'ADD_POST',
        post:post
    }
}

export const addComment=(comment,postId)=>{
    return{
        type:'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts){
    return{
        type:'LOAD_POSTS',
        posts
    }
}