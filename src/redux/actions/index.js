export const SELECT_SUBERDDIT = 'SELECT_SUBERDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectSuberddit = (subreddit) => {
  return {
    type: SELECT_SUBERDDIT,
    subreddit
  }
}

export const invalidateSuberddit = (subreddit) => {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export const requestPosts = (subreddit) => {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const receivePosts = (subreddit, json) => {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.chilren.map(child => child.data),
    receivedAt: Date.now()
  }
}

