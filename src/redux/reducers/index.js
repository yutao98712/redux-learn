import { combineReducers } from 'redux';
import {
  SELECT_SUBERDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions';

const selectedSubreddit = (state = 'reactjs', action) => {
  switch(action.type) {
    case SELECT_SUBERDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

const posts = (
  state = {
    isFeching:false,
    didInvalidate:false,
    items: []
  },
  action
) => {
  switch(action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate:true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lasetUpdated: action.receiveAt
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receiveAt
      })  
    default:
      return state;
  }
}

const postsBySubreddit = (state = {}, action) =>{
  switch(action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({},state,{
        [action.subreddit]: posts(state[action.subreddit], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer;