import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../context/PostProvider/context';
import { loadPosts } from '../../context/PostProvider/actions';
import { CounterContext } from '../../context/CounterProvider/context';
import { decrementCounter, incrementCounter } from '../../context/CounterProvider/action';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    isMounted.current = true;

    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  const handleIncrement = () => {
    incrementCounter(counterDispatch);
  };

  const handleDecrement = () => {
    decrementCounter(counterDispatch);
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <h1>Posts {counterState.counter}</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
