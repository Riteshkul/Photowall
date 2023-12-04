// 2 libraries installed for redux are npm i redux and react-redux

import { act } from 'react-dom/test-utils'
import posts from '../data/posts'
import { combineReducers } from 'redux'
function comment(state={},action){
    switch (action.type) {
        case 'ADD_COMMENT':
        console.log(action.postId)    
        
        if (!state[action.postId]){
            return {...state,[action.postId]:[action.comment]}
        }
        else{
            return {...state,[action.postId]:[...state[action.postId],action.comment]}
        }
    
        default:
            return state;
    }
    return state
}

function post(state=posts,action){
    console.log(action.index)
    switch (action.type) {
        case 'REMOVE_POST':
            return [...state.slice(0,action.index),...state.slice(action.index+1)]
        case 'ADD_POST':
            return [...state,action.post]
        case 'LOAD_POSTS': return action.posts
        
        case 'LOAD_COMMENTS':return action.comments
        default:
            return state;
    }
    
}
const rootReducer=combineReducers({post,comment})
export default rootReducer