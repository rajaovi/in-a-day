import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from './store/Actions/TestAction';
import './styles/_common.scss';
import RoutePage from './routes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <RoutePage />
    </div>
  );
}

export default App;
