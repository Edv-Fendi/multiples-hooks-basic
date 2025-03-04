import { useReducer } from 'react';
import { PostsContext } from './context';
import { reducer } from './reducer';

import P from 'prop-types';
import { data } from './data';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return <PostsContext.Provider value={{ postsState, postsDispatch }}>{children} </PostsContext.Provider>;
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
