import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from './store/Actions/TestAction';
import Signup from './pages/Signup';
import './styles/_common.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
