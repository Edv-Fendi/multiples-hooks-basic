import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../context/CounterProvider';
import { PostsProvider } from '../../context/PostProvider';

import './styles.css';

function App() {
  return (
    <PostsProvider>
      <CounterProvider>
        <div className="App">
          <Posts />
        </div>
      </CounterProvider>
    </PostsProvider>
  );
}

export default App;
